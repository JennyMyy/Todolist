import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './index.css'

import Home from './components/Home';
import TodoList from './components/TodoList.jsx';

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        path: "TodoList",
        element: <TodoList />
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);