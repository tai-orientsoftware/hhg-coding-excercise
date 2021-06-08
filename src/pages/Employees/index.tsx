import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Table } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { addEmployeeAPI, getEmployeesAPI } from '../../apis/employeeAPI';
import { GoBackButton } from '../../components';
import { DEFAULT_PAGE_LIMIT } from '../../constants';
import useFetchEmployees from '../../hooks/useFetchEmployees';
import usePostEmployee from '../../hooks/usePostEmployee';
import columns from './columns';
import { AdditionEmployeeForm } from './components';

const Employees = (): JSX.Element => {
  /* useState */
  const [toggleAdditionEmployeeForm, setToggleAdditionEmployeeForm] =
    useState<boolean>(false);
  const [effect, setEffect] = useState<number>(0);

  const [additionEmployeeForm] = Form.useForm();

  /* Custom hooks */
  const {
    state,
    fetchEmployees,
    pagination,
    onChangePagination,
    resetPagination,
  } = useFetchEmployees(getEmployeesAPI);
  const { postEmployee } = usePostEmployee(addEmployeeAPI);

  const handleTableChange = useCallback(
    ({ current }) => onChangePagination({ page: current }),
    [onChangePagination]
  );

  const refreshPage = useCallback(() => {
    setEffect(effect + 1);
  }, [effect]);

  const handleToggleAdditionEmployeeForm = useCallback(() => {
    setToggleAdditionEmployeeForm(toggle => !toggle);
  }, []);

  const handleSubmitForm = useCallback(
    (data: IAddEmployeeData) => {
      postEmployee(data);
      additionEmployeeForm.resetFields();
      resetPagination();
      refreshPage();
      setToggleAdditionEmployeeForm(false);
    },
    [additionEmployeeForm, postEmployee, resetPagination, refreshPage]
  );

  /* useEffect */
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees, effect]);

  return (
    <div className="employees">
      <GoBackButton to="/" />
      <h1 className="employees__title">Employees Management</h1>
      <main className="employees__container">
        <Button
          className="employees__btn--add"
          type="primary"
          onClick={handleToggleAdditionEmployeeForm}
        >
          <PlusOutlined /> Add new
        </Button>
        <AdditionEmployeeForm
          form={additionEmployeeForm}
          visible={toggleAdditionEmployeeForm}
          onSubmit={handleSubmitForm}
          onClose={handleToggleAdditionEmployeeForm}
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
