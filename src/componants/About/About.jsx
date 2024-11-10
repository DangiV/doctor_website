import React from 'react'
import img11 from "/images/nishi11.png";
import img12 from "/images/nishi12.png";

function About() {
  return (
    <>
       <section class="bg-gray-50 p-16">
    <div class="container mx-auto px-4">
      {/* <!-- First Row --> */}
      <div class="flex flex-col md:flex-row items-center justify-between mb-10">
        {/* <!-- Image --> */}
        <div class="md:w-1/2">
          <img
            src={img11}
            alt="Dental Care"
            class="rounded-xl shadow-lg"
          />
        </div>
        {/* <!-- Content --> */}
        <div class="md:w-1/2 mt-8 md:mt-0 md:pl-10">
          <h3 class="text-red-600 uppercase font-semibold mb-2">About Us</h3>
          <h2 class="text-3xl font-bold mb-4">Your Smile is Our Pride</h2>
          <p class="text-gray-600 mb-4">
            We know the first thing people notice about you is your smile, our expertise and experience combined with modern technologies will ensure you have healthy, beautiful smiles.
          </p>
          <p class="text-gray-600 mb-6">
            Sed sollicitudin pellentesque urna, a suscipit metus imperdiet et. Curabitur consectetur auctor leo eu posuere. Fusce maximus purus ac enim tempor.
          </p>
          <a
            href="#"
            class="inline-block bg-transparent border border-red-500 text-red-600 hover:bg-red-600 hover:text-white font-medium py-2 px-6 rounded transition"
            >Learn More</a
          >
        </div>
      </div>

      {/* <!-- Second Row --> */}
      <div class="flex flex-col md:flex-row-reverse items-center justify-between">
        {/* <!-- Image --> */}
        <div class="md:w-1/2">
          <img
            src={img12}
            alt="Happy Dental Patient"
            class="rounded-xl shadow-lg"
          />
        </div>
        {/* <!-- Content --> */}
        <div class="md:w-1/2 mt-8 md:mt-0 md:pr-10">
          <h3 class="text-red-600 uppercase font-semibold mb-2">New Patients</h3>
          <h2 class="text-3xl font-bold mb-4">We Accept New Patients</h2>
          <p class="text-gray-600 mb-4">
            We are highly skilled in treating a wide range of dental concerns, and take pride in delivering outstanding patient care and exceptional results every time.
          </p>
          <p class="text-gray-600 mb-6">
            Sed sollicitudin pellentesque urna, a suscipit metus imperdiet et. Curabitur consectetur auctor leo eu posuere. Fusce maximus purus ac enim tempor.
          </p>
          <a
            href="#"
            class="inline-block bg-transparent border border-red-500 text-red-600 hover:bg-red-600 hover:text-white font-medium py-2 px-6 rounded transition"
            >Learn More</a
          >
        </div>
      </div>

     
    </div>
  </section>
    </>
  )
}

export default About
