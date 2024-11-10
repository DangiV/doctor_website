import React from 'react'
import { NavLink } from 'react-router-dom';
function Footer() {
  return (
    <>
      
  <footer class="bg-teal-600 py-10 text-white">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      
      <div>
        <h2 class="font-bold text-lg mb-4">Social</h2>
        <div class="bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center">
          <span class="text-xl">G</span> 
        
        </div>
      </div>

      <div>
        <h2 class="font-bold text-lg mb-4">Appointments</h2>
        <p class="mb-4">We will do our best to accommodate your busy schedule. Request an appointment today!</p>
        <NavLink to="/contact">
        <button class="bg-white text-teal-600 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200">
          Request Appointment
        </button>
        </NavLink>
      </div>

      <div>
        <h2 class="font-bold text-lg mb-4">Office Hours</h2>
        <p>MON: 8:00 am - 6:00 pm</p>
        <p>TUE - WED: 9:00 am - 6:00 pm</p>
        <p>THU: 8:00 am - 4:00 pm</p>
        <p>FRI: 8:00 am - 2:00 pm</p>
        <p>SAT - SUN: Closed</p>
      </div>
     
      <div>
        <h2 class="font-bold text-lg mb-4">Contact Us</h2>
        <p>40 Park Place</p>
        <p>Newton, NJ 07860</p>
        <p>Phone: (+91) 998-1607898</p>
      </div>  
    </div>

    <div class="border-t border-teal-400 mt-8 pt-4 text-center text-sm">
      <p>&copy; © 2024 Family Dental Care. All rights reserved.  | 
        <a href="#" class="text-white hover:underline">Sitemap</a> | 
        <a href="#" class="text-white hover:underline">Accessibility</a>
      </p>
      <p>Family Dental Care</p>
    </div>
  </footer>
    </>
  )
}

export default Footer
