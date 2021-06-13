import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Table } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { addEmployeeAPI, getEmployeesAPI } from '../../apis/employeeAPI';
import { GoBackButton } from '../../components';
import { DEFAULT_PAGE_LIMIT } from '../../constants';
import useFetchEmployees from '../../hooks/useFetchEmployees';
import usePagination from '../../hooks/usePagination';
import usePostEmployee from '../../hooks/usePostEmployee';
import useSorter from '../../hooks/useSorter';
import columns from './columns';
import { AdditionEmployeeForm } from './components';

const Employees = (): JSX.Element => {
  /* useState */
  const [toggleAdditionEmployeeForm, setToggleAdditionEmployeeForm] =
    useState<boolean>(false);

  const [additionEmployeeForm] = Form.useForm();

  /* Custom hooks */
  const { pagination, changeCurrentPage } = usePagination();
  const { sorter } = useSorter();
  const { state, fetchEmployees } = useFetchEmployees(getEmployeesAPI);
  const { postEmployee } = usePostEmployee(addEmployeeAPI);

  const handleTableChange = useCallback(
    ({ current }) => changeCurrentPage(current),
    [changeCurrentPage]
  );

  const handleToggleAdditionEmployeeForm = useCallback(() => {
    setToggleAdditionEmployeeForm(toggle => !toggle);
  }, []);

  const handleSubmitForm = useCallback(
    async (data: FormData) => {
      await postEmployee(data);
      additionEmployeeForm.resetFields();
      changeCurrentPage(1);
      setToggleAdditionEmployeeForm(false);
    },
    [additionEmployeeForm, postEmployee, changeCurrentPage]
  );

  /* useEffect */
  useEffect(() => {
    const params = { ...pagination, ...sorter };
    fetchEmployees(params);
  }, [fetchEmployees, pagination, sorter]);

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
