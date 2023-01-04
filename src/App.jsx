import Home from "./Home";
import OppForm from "./OppForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/addform",
      element: <OppForm />
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
