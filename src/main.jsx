import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('featureJobs.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        //loader: ()=>fetch('marks.json')
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/jobDetails/:jobDetailsId',
        element: <JobDetails></JobDetails>,
        //loader:()=>fetch('featureJobs.json')
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
