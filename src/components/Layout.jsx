import React, { Suspense } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='max-w-screen min-h-screen'>
        <Navbar />
        <Outlet />
      </div>
    </Suspense>
  );
};

export default Layout;
