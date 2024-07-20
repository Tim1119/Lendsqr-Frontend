import { Outlet } from 'react-router-dom';
import Navbar from '../components/dashboard/Navbar';
import Sidebar from '../components/dashboard/Sidebar';
import { useState } from 'react';
import  '../styles/layout/dashboardLayout.scss'

const DashboardLayout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='dashboard__layout' >
    <Navbar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    <div className='dashboard__content-container' >
      <Outlet />
    </div>

  </div>
  )
}

export default DashboardLayout