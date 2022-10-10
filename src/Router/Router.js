import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Home from "../Components/Home/Home";
import Statistics from "../Components/Statistics/Statistics";
import Topics from "../Components/Topics/Topics";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            { path: '/', element: <Home /> },
            { path: 'home', element: <Home /> },
            { path: 'blog', element: <Blog /> },
            { path: 'topics', element: <Topics /> },
            { path: 'statistics', element: <Statistics /> },
            { path: '*', element: <div>404</div> },
        ],
        element: <Main />
    },
]);