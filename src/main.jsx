import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App.jsx';
import Home from './home/index.jsx';
import Dashboard from './dashboard/index.jsx';
import { SignUpPage } from './auth/sign-up/index.jsx';
import { SignINPage } from './auth/sign-in/index.jsx';
import './index.css';
import JobSearch from './dashboard/JobSearch.jsx';
import ResumeScanner from './dashboard/ResumeScanner.jsx';
import PlacementResources from './dashboard/PlacementResources.jsx';
import InterviewPreparation from './dashboard/InterviewPreparation.jsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/auth/sign-in',
    element: <SignINPage />,
  },
  {
    path: '/dashboard',
    element: <App />, // App component includes Sidebar and content area
    children: [
      {
        path: '',
        element: <Dashboard />, // Default view for /dashboard
      },
      {
        path: 'job-search',
        element: <JobSearch />, // Shows JobSearch component
      },
      {
        path: 'resume-scanner',
        element: <ResumeScanner />, // Shows ResumeScanner component
      },
      {
        path: 'placement-resources',
        element: <PlacementResources />, // Shows PlacementResources component
      },
      {
        path: 'interview-preparation',
        element: <InterviewPreparation />, // Shows InterviewPreparation component
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
