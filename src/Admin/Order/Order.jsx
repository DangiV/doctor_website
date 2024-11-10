import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';


function Order() {
  const [patients, setPatients] = useState([]); 

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:3008/api/users/patients'); 
        setPatients(response.data); 
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []); 

  return (
    <>
      <div className="flex h-screen">
        <div className="w-64 bg-gray-800 text-white">
          <Sidebar />
        </div>
        <div className="w-full p-8">
          <h1 className="font-bold text-5xl mb-8">All Patients</h1>
          {/* Table for displaying patients */}
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 px-4 border">Patient Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Number</th>
                <th className="py-2 px-4 border">Service</th>
                <th className="py-2 px-4 border">Date</th>
                <th className="py-2 px-4 border">Time</th>
              </tr>
            </thead>
            <tbody>
              {patients.length > 0 ? (
                patients.map((patient) => (
                  <tr key={patient._id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border">{patient.PatientName}</td>
                    <td className="py-2 px-4 border">{patient.Email}</td>
                    <td className="py-2 px-4 border">{patient.Number}</td>
                    <td className="py-2 px-4 border">{patient.Service}</td>
                    <td className="py-2 px-4 border">{new Date(patient.Date).toLocaleDateString()}</td>
                    <td className="py-2 px-4 border">{patient.Time}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-2 px-4 text-center text-gray-600">No patients found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Order;
