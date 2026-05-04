import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch('https://dummyjson.com/recipes');
    const json = await res.json();
    setData(json.recipes);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar data={data} />
      <div className="pt-10 px-4">
        <Outlet context={{ data }} />
      </div>
    </div>
  );
};

export default Layout;