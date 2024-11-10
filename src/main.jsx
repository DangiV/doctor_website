import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './componants/Home/Home.jsx'
import Contact from './componants/Contact/Contact.jsx'
import About from './componants/About/About.jsx'
import  Services from './componants/Services/Services.jsx';
import Error from './Admin/Error/Error.jsx'
import Sidebar from './Admin/Sidebar/Sidebar.jsx'
import Order from './Admin/Order/Order.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },  
      { path: 'contact', element: <Contact /> }, 
      { path: 'about', element: <About /> },  
      { path: 'services', element: <Services/> },
      { path: 'admin/Error', element: <Error/> },
      { path: 'admin/Sidebar', element: <Sidebar/> },
      { path: 'admin/Order', element: <Order/> },

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
);
