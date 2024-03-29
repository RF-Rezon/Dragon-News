import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Catagory from "../Catagory/Catagory";
import Register from "../LoginSignUp/Register";
import Main from "../Main/Main";
import NewsLayout from "../Main/NewsLayout";
import LogInRegister from "../Main/logInRegister";
import News from "../News/News";
import LogIn from './../LoginSignUp/LogIn';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LogInRegister />,
    children:[
      {
        path: "/",
        element: <Navigate to="categories/0"/>
    },
      {
        path: "login",
        element: <LogIn/>
    },{
      path: "register",
      element: <Register/>
    }]
  },
  {
    path: "categories",
    element: <Main />,
    children: [
      {
        path: ":id",
        element: <Catagory />,
        loader: ({ params }) => fetch(`https://dragon-news-server-one-vert.vercel.app/categories/${params?.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <News />,
        loader: ({ params }) => fetch(`https://dragon-news-server-one-vert.vercel.app/news/${params?.id}`),
      },
    ],
  },
]);

export default router;
