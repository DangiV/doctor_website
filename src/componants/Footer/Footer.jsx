import React from 'react'
import './Footer.css';
import { NavLink } from 'react-router-dom';
function Footer() {
  return (
    <>

      <footer class="bg-teal-600 py-md-10 py-3 text-white">
        <div class="container mx-auto px-md-4 px-3 grid grid-cols-1 md:grid-cols-4 gap-md-8 gap-3">
          <div>
            <h2 class="font-bold text-lg mb-md-4 mb-2 heads">Social</h2>
            <div class="bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center">
              <span class="text-xl">G</span>
            </div>
          </div>

          <div>
            <h2 class="font-bold text-lg mb-md-4 mb-2 heads">Appointments</h2>
            <p class="mb-md-4 mb-2 appointmenttxt">We will do our best to accommodate your busy schedule. Request an appointment today!</p>
            <NavLink to="/contact">
              <button class="bg-white appointmenttxt  text-teal-600 px-md-6 px-2 py-md-2 py-1 rounded-full font-semibold shadow-md hover:bg-gray-200">
                Request Appointment
              </button>
            </NavLink>
          </div>

          <div>
            <h2 class="font-bold text-lg mb-md-4 mb-2 heads">Office Hours</h2>
            <p className='appointmenttime'><span> MON </span>: &nbsp; 8:00 am - 6:00 pm</p>
            <p className='appointmenttime'><span> TUE - WED</span>: &nbsp; 9:00 am - 6:00 pm</p>
            <p className='appointmenttime'><span> THU</span>: &nbsp; 8:00 am - 4:00 pm</p>
            <p className='appointmenttime'><span> FRI</span>: &nbsp; 8:00 am - 2:00 pm</p>
            <p className='appointmenttime'><span> SAT - SUN</span>: &nbsp; Closed</p>
          </div>

          <div>
            <h2 class="font-bold text-lg mb-md-4 mb-2 heads">Contact Us</h2>
            <p className='addresstxt'>40 Park Place</p>
            <p className='addresstxt'>Newton, NJ 07860</p>
            <p className='addresstxt'>Phone: +91 88277-36963 , +91 99932-60565 </p>
          </div>
        </div>

        <div class="border-t border-teal-400 mt-md-8 mt-3 pt-md-4 py-2 text-center text-sm footer-txt">
          <p>&copy; © 2024 Family Dental Care. All rights reserved. &nbsp;|
            <a href="#" class="text-white hover:underline"> codeIn </a> 
            {/* <a href="#" class="text-white hover:underline">Accessibility</a> */}
          </p>
          <p>Family Dental Care</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
