import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home ops={ops} />,
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
