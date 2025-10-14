import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button1 from '../../components/Banner/Banner1';
import Button2 from '../../components/Banner/Banner2';
import AllApps from '../../components/AllApps/AllApps';
import TApps from '../../components/TApps/TApps';

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Button1></Button1>
      <Button2></Button2>
      <TApps data={data}></TApps>
    </div>
  );
};

export default Home;