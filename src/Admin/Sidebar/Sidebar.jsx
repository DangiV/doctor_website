import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-full bg-gray-800 text-white">
      <ul className="flex-grow">
        
      <li className="hover:bg-gray-700">
          <Link to="/admin/Order" className="flex items-center p-4">
            Order
          </Link>
        </li>
     
        <li className="hover:bg-gray-700">
          <Link to="/admin/Error" className="flex items-center p-4">
            Error
          </Link>
        </li>
       
      </ul>
    </div>
  );
};

export default Sidebar;
