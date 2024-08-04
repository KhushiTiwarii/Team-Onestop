import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import JobSearch from './JobSearch';
import { UserButton } from '@clerk/clerk-react';


const Dashboard = () => {
  return (
    <div className="flex h-screen">
     <Sidebar/>
      <div className="flex-1 p-6 bg-gray-100 overflow-auto relative">
    <div className="absolute mt-8 right-10">
          <UserButton style={{ width: '48px', height: '48px' }} // Adjust size
            className="text-2xl" />
        </div>
        
        <Routes>
          <Route path="/" element={<div>Welcome to the Dashboard</div>} />
          
          <Route path="job-search" element={<JobSearch />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
