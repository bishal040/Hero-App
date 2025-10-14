import React from 'react';
import Button1 from '../../components/Banner/Banner1';
import Button2 from '../../components/Banner/Banner2';
import { TbApps } from 'react-icons/tb';
import TApps from '../../components/TApps/TApps';
import { useLoaderData } from 'react-router';
import SingleApp from '../SingleApp/SingleApp';
import AllApps from '../../components/AllApps/AllApps';
import SingleAppDetail from '../../components/SingleAppDetail/SingleAppDetail';


const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Button1></Button1>
      <SingleAppDetail></SingleAppDetail>
      <AllApps></AllApps>
      <Button2></Button2>
      <TApps data={data}></TApps>
      <SingleApp></SingleApp>
    </div>
  );
};

export default Home;