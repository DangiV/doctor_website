import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  // State for form inputs
  const [formData, setFormData] = useState({
    PatientName: '',
    Email: '',
    Number: '',
    Service: '',
    Date: '',
    Time: '',
    Message: ''
  });

  // State to manage which form is displayed
  const [showForm, setShowForm] = useState(null); // `null` means no form is shown

  // Handle input changes 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission for form 1
  const handleSubmitForm1 = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post('http://localhost:3008/api/users/create', formData);
      console.log('Success:', response.data);
      // Optionally reset form after successful submission
      setFormData({
        PatientName: '',
        Email: '',
        Number: '',
        Service: '',
        Date: '',
        Time: '',
        Message: ''
      });
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  // Handle form submission for form 2
  const handleSubmitForm2 = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Implement submission for form 2 if needed
    console.log('Form 2 submitted with data:', new FormData(e.target));
  };

  return (
    <>
      <section className="py-16">
        <div className="text-center">
            
          <h1 className="text-4xl font-semibold text-gray-800">Book Appointment</h1>
          <p className="text-lg text-gray-600 mt-4">
            Schedule your next dental appointment effortlessly. We will contact you to confirm your request or change the time or day if unavailable.
          </p>
        </div>
        <div className="flex items-center justify-center">
        <div className='p-8 '>
          <p>Returning Patient?</p>
          <div className="space-x-4 mt-6 ">  
            <button 
              onClick={() => setShowForm(1)} // Show form 1
              className="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-lime-500
                before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
                before:-right-full before:hover:right-0 before:rounded-full  before:bg-lime-200 before:-z-10 
                before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
              Yes
            </button>
            <button 
              onClick={() => setShowForm(2)} // Show form 2
              className="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-lime-500
                before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
                before:-right-full before:hover:right-0 before:rounded-full  before:bg-lime-200 before:-z-10 
                before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
              No
            </button>
          </div>
        </div>
        </div>
        
        {/* Display the selected form */}
        {showForm === 1 && (
          <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
            <form onSubmit={handleSubmitForm1} className='form1'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="PatientName" className="block text-gray-600 font-semibold mb-2">Name*</label>
                  <input
                    type="text"
                    id="PatientName"
                    name="PatientName"
                    value={formData.PatientName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="Number" className="block text-gray-600 font-semibold mb-2">Phone Number*</label>
                  <input
                    type="text"
                    id="Number"
                    name="Number"
                    value={formData.Number}
                    onChange={handleChange}
                    placeholder="(+91) 998 1607898"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <label htmlFor="Email" className="block text-gray-600 font-semibold mb-2">Email Address*</label>
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="Service" className="block text-gray-600 font-semibold mb-2">Service</label>
                  <input
                    type="text"
                    id="Service"
                    name="Service"
                    value={formData.Service}
                    onChange={handleChange}
                    placeholder="Ex. Dental Implants"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <label htmlFor="Date" className="block text-gray-600 font-semibold mb-2">Date</label>
                  <input
                    type="date"
                    id="Date"
                    name="Date"
                    value={formData.Date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="Time" className="block text-gray-600 font-semibold mb-2">Time</label>
                  <input
                    type="time"
                    id="Time"
                    name="Time"
                    value={formData.Time}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                    required
                  />
                </div>
              </div>

              <div className="mt-8">
                <label htmlFor="Message" className="block text-gray-600 font-semibold mb-2">Message</label>
                <textarea
                  id="Message"
                  name="Message"
                  value={formData.Message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Please describe what service you are interested in"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                ></textarea>
              </div>

              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="bg-red-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}

        {showForm === 2 && (
          <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
            <form onSubmit={handleSubmitForm2} className='form2'>
            <div>
                  <label htmlFor="PatientName" className="block text-gray-600 font-semibold mb-2">Name*</label>
                  <input
                    type="text"
                    id="PatientName"
                    name="PatientName"
                    value={formData.PatientName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>

     
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="dob">Date of birth*</label>
        <input type="date" id="dob" name="dob" class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" required/>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2">Address*</label>
        <div class="grid grid-cols-2 gap-4">
          <input type="text" name="street" placeholder="Street" class="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" required/>
          <input type="text" name="city" placeholder="City/Suburb" class="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" required/>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-4">
          <input type="text" name="state" placeholder="State" class="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" required/>
          <input type="text" name="zip" placeholder="Zip/Post Code" class="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" required/>
        </div>
        <input type="text" name="country" placeholder="Country" class="w-full mt-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" required/>
      </div>

  
      <div>
                  <label htmlFor="Number" className="block text-gray-600 font-semibold mb-2">Phone Number*</label>
                  <input
                    type="text"
                    id="Number"
                    name="Number"
                    value={formData.Number}
                    onChange={handleChange}
                    placeholder="(+91) 998 1607898"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>

                
                <div>
                  <label htmlFor="Email" className="block text-gray-600 font-semibold mb-2">Email Address*</label>
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
                

    
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="healthcare-provider">Healthcare provider*</label>
        <input type="text" id="healthcare-provider" name="healthcare-provider" class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" required/>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="membership-number">Membership Number*</label>
        <input type="text" id="membership-number" name="membership-number" class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" required/>
      </div>

      <div>
                  <label htmlFor="Date" className="block text-gray-600 font-semibold mb-2">Date*</label>
                  <input
                    type="date"
                    id="Date"
                    name="Date"
                    value={formData.Date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="Time" className="block text-gray-600 font-semibold mb-2">Time</label>
                  <input
                    type="time"
                    id="Time"
                    name="Time"
                    value={formData.Time}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>

      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2">Is the patient under 18?*</label>
        <div class="flex">
          <label class="mr-4">
            <input type="radio" name="under18" value="yes" class="mr-2"/> Yes
          </label>
          <label>
            <input type="radio" name="under18" value="no" class="mr-2"/> No
          </label>
        </div>
      </div>

      <button
                  type="submit"
                  className="bg-red-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Submit
                </button>
            </form>
          </div>
        )}
      </section>
    </>
  );
}

export default Contact;
