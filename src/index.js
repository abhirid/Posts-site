import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import NewPost from './components/NewPost';

const router= createBrowserRouter([
  {path:'/',element:<App/>}, // our domain main
  {path:'/abhi',element:<NewPost/>}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
reportWebVitals();
