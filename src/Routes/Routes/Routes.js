import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main"
import Blog from "../../Pages/Blog/Blog";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Nopagefound from "../../Pages/Shared/Nopagefound/Nopagefound.js";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Checkout from "../../Pages/Checkout/Checkout";
import TermsAndConditions from "../../Pages/Others/TermsAndContions/TermsAndConditions";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/courses',
                loader: () => fetch('https://tech-learning-bd-server.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/course/:courseId',
                loader: ({ params }) => fetch(`https://tech-learning-bd-server.vercel.app/course/${params.courseId}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/checkout/:courseId',
                element: <PrivateRoute> <Checkout></Checkout> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://tech-learning-bd-server.vercel.app/course/${params.courseId}`)

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
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '*',
                element: <Nopagefound></Nopagefound>
            }
        ]
    }
])