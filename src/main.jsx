import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import JobDetails from './components/JobDetails/JobDetails';
import Error from './components/Error/Error';

const router = createBrowserRouter([
  {
    path:'*',
    element: <Error></Error>
  },
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('/featureJobs.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader:()=>fetch('/featureJobs.json')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/jobDetails/:jobDetailsId',
        element: <JobDetails></JobDetails>,
      }, 
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
