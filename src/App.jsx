import { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar/nav"
import Home from "./components/home/home"
import Explore from './components/explore/export'
import Footer from './components/footer/footer'
import Curosal from './components/curosal/curosal'
import Login from './components/login/login'
import signup from './components/signup/signup'
import { Route } from 'react-router-dom'
import Root from './components/root/root'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from './components/signup/signup'
import Top from './components/top/top'



function App() {
  const [count, setCount] = useState(0)


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "login",
          element: <Login />,
        },

        {
          path: "",
          element: <Top />,
        },

        {
          path: "signUp",
          element: <Signup />,
        },
      ],
    },
  ]);

  return (
    <>
      <div className="home-9">
        <RouterProvider router={router} />
      </div>
    </>
  );
}
export default App;
