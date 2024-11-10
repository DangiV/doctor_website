
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Error({ statusCode = 404, message = 'Page not found' }) {
  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1); // Navigate back to the previous page
  const handleGoHome = () => navigate('/'); // Navigate to the homepage

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-9xl font-extrabold text-red-600">{statusCode}</h1>
      <p className="text-2xl mt-4 font-semibold text-gray-800">{message}</p>
      <p className="mt-2 text-gray-600">The page you are looking for might have been removed or is temporarily unavailable.</p>

      <div className="mt-6 flex space-x-4">
        <button 
          onClick={handleGoBack} 
          className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800"
        >
          Go Back
        </button>

        <button 
          onClick={handleGoHome} 
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default Error;
