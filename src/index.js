import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Login from './pages/Login';
import Home from './pages/Home';
import Account from './pages/Account';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/account",
    element: <Account />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <html>
      <Header />
      <body>
        <Nav />
        <RouterProvider router={router} />
        <Footer />
      </body>
    </html>
  </React.StrictMode>
);