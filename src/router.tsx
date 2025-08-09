// This file is part of the Glitch Matrix Nexus project.
// It defines the main router for the application using React Router v6.
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"; 
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/projects", element: <Projects /> },   
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <NotFound /> },
  ],
  {
    future: {     
      v7_relativeSplatPath: true,    
    },
  }
);
