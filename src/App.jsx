import Home from "./Home";
import AddForm from "./AddForm";
import {useState,useEffect} from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

const App = () => {

  const [opps,setOpps] = useState([])

  const fetchOpps = async () => {
      const req = await fetch('http://localhost:3000/opportunities')
      const res = await req.json()
      console.log(res)
      setOpps(res)
  }

  useEffect(()=>{
      fetchOpps()
  },[])

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home opps={opps} />,
    },
    {
      path: "/addform",
      element: <AddForm opps={opps} setOpps={setOpps} />
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
