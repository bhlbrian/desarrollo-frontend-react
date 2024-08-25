import { createBrowserRouter } from "react-router-dom";
import Default from "../page/default/Default";
import Product from "../page/product/Product";
import Formulario from "../page/forms/LoginForms";
import App from "../App";
import Landing from "../page/landingPage/LandingPage";

const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-frontend-react' : '/';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Landing/>,
            },
            {
                path: "/default",
                element: <Default/>,
            },
            {
                path: "/product",
                element: <Product/>,
            },
            {
                path: "/formulario",
                element: <Formulario/>,
            }
        ]
    }
  ],
  {
    basename: basename,
    }
)


export default routes;