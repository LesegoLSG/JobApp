import React from 'react';
import SideBar from '../../CompanyComponents/CompanyPortal/SideBar/SideBar';
import TopBar from '../../CompanyComponents/CompanyPortal/TopBar/TopBar';
import { Outlet } from 'react-router-dom';

const PortalPage = () => {
  return (
    <section className="flex">
        <SideBar/>
        <div className="flex-1 h-screen">
        <TopBar/>
        <Outlet/>

        </div>
    </section>
  )
}

export default PortalPage