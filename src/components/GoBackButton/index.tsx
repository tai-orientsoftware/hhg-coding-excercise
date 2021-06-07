import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

const GoBackButton = ({ to }: { to: string }): JSX.Element => {
  const history = useHistory();

  return (
    <Button
      className="go-back-btn"
      onClick={() => history.push(to)}
      title="Back to home page"
    >
      <ArrowLeftOutlined />
    </Button>
  );
};

export default GoBackButton;
