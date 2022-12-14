import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home";
import Questions from "../Components/Questions/Questions";
import Statistics from "../Components/Statistics/Statistics";
import Topics from "../Components/Topics/Topics";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: '/',
                loader: async () => {
                    const response = await fetch('https://openapi.programming-hero.com/api/quiz');
                    const data = await response.json();
                    return data.data;
                },
                element: <Home />
            },
            {
                path: 'home',
                loader: async () => {
                    const response = await fetch('https://openapi.programming-hero.com/api/quiz');
                    const data = await response.json();
                    return data.data;
                },
                element: <Home />
            },
            { path: 'blog', element: <Blog /> },
            {
                path: 'topics',
                loader: async () => {
                    const response = await fetch('https://openapi.programming-hero.com/api/quiz');
                    const data = await response.json();
                    return data.data;
                },
                element: <Topics />
            },
            {
                path: 'statistics',
                loader: async () => {
                    const response = await fetch('https://openapi.programming-hero.com/api/quiz');
                    const data = await response.json();
                    return data.data;
                },
                element: <Statistics />
            },
            { path: '*', element: <Error></Error> },
            {
                path: '/quiz/:id',
                loader: async ({ params }) => {
                    const response = await fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
                    const data = await response.json();
                    console.log(data.data);
                    return data.data;
                },
                element: <Questions ></Questions>
            },
        ],
        element: <Main />
    },
]);