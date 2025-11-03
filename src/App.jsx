import { createBrowserRouter } from "react-router-dom"
import Home from "./ui/Home"
import Menu from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import CreateOrder , {action as createOrderAction} from "./features/order/CreateOrder"
import Order from "./features/order/Order"
import { RouterProvider } from "react-router-dom"
import  AppLayout  from "./ui/AppLayout"
import { getMenu } from "./services/apiRestaurant"
import Error from "./ui/Error"
import { loader as orderLoader } from "./features/order/Order"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/menu",
        element: <Menu />,
        loader: getMenu,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader : orderLoader,
         errorElement: <Error />,
      
      }


    ]
  }



])



function App() {


  return <RouterProvider router={router} />
}

export default App
