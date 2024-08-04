import React, { useEffect } from 'react';
import { UserButton, useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard');
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-white">
      <div className="flex justify-end w-full p-4">
        <button
          className="border border-purple-800 text-purple-800 font-bold py-2 px-4 rounded-full shadow-lg mr-4"
          onClick={() => navigate('/dashboard')}
        >
          Dashboard
        </button>
        <UserButton />
      </div>

      <div className="text-center w-4/5 md:w-1/2 lg:w-1/3 flex-grow flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-4 text-purple-800">
          ONESTOP
        </h1>
        <p className="text-lg mb-8 text-gray-700">
          Your Ultimate Student Placement Prep Platform
        </p>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
            onClick={() => navigate('auth/sign-in')}
          >
            Sign In
          </button>
          <button
            className="bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
            onClick={() => navigate('/auth/sign-up')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
