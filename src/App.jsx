import { useState } from 'react'
import './App.css'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import Header from './ui/custom/Header'
import Home from './home'
import { SignINPage  } from './auth/sign-in'
import {  SignUpPage } from './auth/sign-up'
import Sidebar from './dashboard/components/sidebar'

function App() {
  const [count, setCount] = useState(0)
  const {user, isLoaded, isSignedIn}=useUser();

if(!isSignedIn&&isLoaded)

{
 return <Navigate to={'/auth/sign-up'}/>
}
  return (
    <>
    
   
     <Outlet/>
   </>
  ) 
}

export default App
