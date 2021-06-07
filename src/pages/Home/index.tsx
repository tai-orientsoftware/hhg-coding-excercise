import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = (): JSX.Element => {
  return (
    <div className="home-page">
      <h1 className="home-page__title">Home page</h1>
      <div className="home-page__redirect-btn">
        <Button>
          <Link to="/counter">Counter Page</Link>
        </Button>
        <Button>
          <Link to="/employees">Employees Page</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
