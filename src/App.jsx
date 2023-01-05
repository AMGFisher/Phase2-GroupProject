import Home from "./Home";
import OppList from "./OppList";
import AddForm from "./AddForm";
import Donate from "./Donate";
import Contact from "./Contact";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


  const AppLayout = () => {
    return (
      <>
        <Nav />
        <Outlet />
      </>
    );
  };

const App = () => {
  const [opps, setOpps] = useState([]);

  const fetchOpps = async () => {
    const req = await fetch("http://localhost:3000/opportunities");
    const res = await req.json();
    console.log(res);
    setOpps(res);
  };

  useEffect(() => {
    fetchOpps();
  }, []);

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/opportunities",
          element: <OppList opps={opps} />,
        },
        {
          path: "/addform",
          element: <AddForm opps={opps} setOpps={setOpps} />,
        },
        {
          path: "/donate",
          element: <Donate />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <em>Not found</em>

          </div>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
