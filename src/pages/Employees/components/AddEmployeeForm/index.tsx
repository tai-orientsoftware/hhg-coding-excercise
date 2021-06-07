import { Button, Form, FormInstance, Input, Modal } from 'antd';
import React from 'react';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
};

type AddEmployeeFormProps = {
  form: FormInstance;
  visible: boolean;
  onSubmit: (data: any) => void;
  onClose: () => void;
};

const AddEmployeeForm = ({
  form,
  visible,
  onSubmit,
  onClose,
}: AddEmployeeFormProps): JSX.Element => {
  return (
    <Modal
      title="ADD NEW EMPLOYEE"
      className="employees__modal"
      centered
      visible={visible}
      footer={null}
      onCancel={onClose}
    >
      <Form
        {...layout}
        form={form}
        initialValues={{ name: '', email: '', position: '' }}
        onFinish={onSubmit}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Name is required' }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Email is required' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="position"
          label="Position"
          rules={[{ required: true, message: 'Position is required' }]}
        >
          <Input placeholder="Posititon" />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddEmployeeForm;
