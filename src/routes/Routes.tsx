import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "../Components/Home";
import About from "../Components/About";
import ContactLayout from "./Layouts/ContactLayout";
import ContactTwo from "../Components/Contact/ContactTwo";
import ContactThree from "../Components/Contact/ContactThree";
import ContactOneLayout from "./Layouts/ContactOneLayout";
import Video from "../Components/Contact/video/Video";
import VideoTwo from "../Components/Contact/video/VideoTwo";
import AtomComponents from "../Components/AtomComponents";

export const routes = createBrowserRouter([{
    path: '', element: <Layout />, children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      {
        path: '/contact', element: <ContactLayout />, children: [
          {  element: <ContactOneLayout />,children:[
            { index:true , element:<Video />},
            { path:'videoTwo',element:<VideoTwo />}
          ] 
        }
          ,
          { path: 'contactTwo', element: <ContactTwo /> },
          { path: 'contactThree', element: <ContactThree /> },
        ]
      },
      { path: '/atom', element: <AtomComponents /> },

    ]
  }])