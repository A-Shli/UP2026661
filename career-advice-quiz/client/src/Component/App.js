import '../styles/App.css';
import React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./Main";
import Quiz from "./Quiz";
import Result from "./result";
import Navbar from "./Navbar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main /> 
    
  },
  {
    path: "/Quiz",
    element: <Quiz />
    
    
  },
  {
    path: "/result",
    element: <Result />
  },
]);
function App() {
  return (
    <>
    <Navbar/>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
