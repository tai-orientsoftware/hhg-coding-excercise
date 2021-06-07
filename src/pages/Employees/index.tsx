import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Table } from 'antd';
import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { addEmployeeAPI, getEmployeesAPI } from '../../apis/employeeAPI';
import { GoBackButton } from '../../components';
import { DEFAULT_PAGE_LIMIT } from '../../constants';
import usePagination from '../../hooks/usePagination';
import useSorter from '../../hooks/useSorter';
import { AddEmployeeForm } from './components';
import * as actions from './state/actions';
import { employeesReducer, initialState } from './state/reducer';
import columns from './utils/columns';

const Employees = (): JSX.Element => {
  /* useState */
  const [toggleAddEmployeeForm, setToggleAddEmployeeForm] =
    useState<boolean>(false);

  /* useReducer */
  const [state, dispatch] = useReducer(employeesReducer, initialState);

  const [addEmployeeForm] = Form.useForm();

  /* custom hooks */
  const { pagination, goToPage, resetPagination } = usePagination();
  const { sorter } = useSorter();

  const handleTableChange = useCallback(
    ({ current }) => goToPage(current),
    [goToPage]
  );

  const handleToggleAddEmployeeForm = useCallback(() => {
    setToggleAddEmployeeForm(toggle => !toggle);
  }, []);

  const handleSubmitForm = (data: IAddEmployeeData) => {
    dispatch(actions.addEmployeeRequest());
    addEmployeeAPI(data)
      .then(res => {
        dispatch(actions.addEmployeeSuccess(res));
        addEmployeeForm.resetFields();
        setToggleAddEmployeeForm(false);
        resetPagination();
      })
      .catch(err => dispatch(actions.addEmployeeFailure(err)));
  };

  /* useEffect */
  useEffect(() => {
    dispatch(actions.getEmployeesRequest());
    getEmployeesAPI({ ...pagination, ...sorter })
      .then(res => dispatch(actions.getEmployeesSuccess(res)))
      .catch(err => dispatch(actions.getEmployeesFailure(err)));
  }, [pagination, sorter]);

  return (
    <div className="employees">
      <GoBackButton to="/" />
      <h1 className="employees__title">Employees Management</h1>
      <main className="employees__container">
        <Button
          className="employees__btn--add"
          type="primary"
          onClick={handleToggleAddEmployeeForm}
        >
          <PlusOutlined /> Add new
        </Button>
        <AddEmployeeForm
          form={addEmployeeForm}
          visible={toggleAddEmployeeForm}
          onSubmit={handleSubmitForm}
          onClose={handleToggleAddEmployeeForm}
        />
        <Table
          className="employees__table"
          columns={columns}
          dataSource={state.data}
          loading={state.isLoading}
          pagination={{
            current: pagination.page,
            pageSize: DEFAULT_PAGE_LIMIT,
            total: state.total,
            position: ['bottomCenter'],
            showSizeChanger: false,
          }}
          onChange={handleTableChange}
          rowKey="id"
          bordered
        />
      </main>
    </div>
  );
};

export default Employees;
