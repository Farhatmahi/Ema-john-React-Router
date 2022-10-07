import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Orders from "./Components/Orders/Orders";
import Main from "./Layout/Main";
import Shop from "./Components/Shop/Shop"
import Inventory from "./Components/Inventory/Inventory";
import About from "./Components/About/About";
// import './Components/Shop/products.json'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path : "/",
          element : <Shop />,
          loader : () => {fetch('products.json')}
        },
        {
          path: "/orders",
          loader : () => {
            return fetch('products.json')
          },
          element: <Orders />,
        },
        {
          path : "/inventory",
          element : <Inventory />
        },
        {
          path : "/about",
          element : <About />
      
        }
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
