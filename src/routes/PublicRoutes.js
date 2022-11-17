import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../pages/AddService/AddService";
import Blogs from "../pages/Blogs/Blogs";
import EditReview from "../pages/EditReview/EditReview";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Register/Register";
import Service from "../pages/Service/Service";
import Services from "../pages/Services/Services";
import PrivateRoute from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('https://wild-zone-server.vercel.app/services?limit=3')
            },
            {
                path: '/services',
                element: <Services></Services>,
                // loader: ()=>fetch('https://wild-zone-server.vercel.app/services')
            },
            {
                path: '/service/:id',
                element: <Service></Service>,
                loader: ({params})=>fetch(`https://wild-zone-server.vercel.app/service/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/my-reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/edit-my-reviews/:id',
                element: <PrivateRoute><EditReview></EditReview></PrivateRoute>,
                loader: ({params})=>fetch(`https://wild-zone-server.vercel.app/edit-review/${params.id}`)
            },
            {
                path: '/add-service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
])

export {router}