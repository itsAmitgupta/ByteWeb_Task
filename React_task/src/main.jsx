import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './page/Signup.jsx'
import Dashbaord from './page/Dashbaord.jsx'
import LogIn from './page/LogIn.jsx'

const router= createBrowserRouter([
  {
    path:'/',
    element:<Signup/>
  },
  {
    path:'/signin',
    element:<LogIn/>
  },
  {
    path:'/dashboard',
    element:<Dashbaord/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
