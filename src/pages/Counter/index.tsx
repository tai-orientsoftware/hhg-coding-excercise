import { Button } from 'antd';
import React, { useCallback, useState } from 'react';
import { GoBackButton } from '../../components';

const Counter = (): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncreaseButton = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const handleResetButton = useCallback(() => {
    setCounter(0);
  }, []);

  return (
    <div className="counter-page">
      <GoBackButton to="/" />
      <h1 className="counter-page__title">Counter pages</h1>
      <h2 className="counter-page__value">{counter}</h2>
      <div className="counter-page__buttons">
        <Button
          onClick={handleIncreaseButton}
          className="counter-page__buttons--item"
        >
          Increase 1
        </Button>
        <Button
          onClick={handleResetButton}
          className="counter-page__buttons--item"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;
