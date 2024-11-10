import React from 'react'
import img15 from '/images/Nishi15.png';
import img16 from '/images/Nishi16.png';
import img17 from '/images/Nishi17.png';
import img18 from '/images/nishi18.png';
import { NavLink } from 'react-router-dom';


function Services() {
  return (
    <>

<section className=" text-black py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src={img18} // Replace with your image URL
            alt="Dental Health"
            className="w-80 h-auto"
          />
        </div>

        {/* Right side: Text and Buttons */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Let's Take Care Of Dental Health</h2>
          <p className="text-black-200 mb-6">
            Some people think that brushing your teeth twice a day is enough to keep
            your teeth and mouth healthy. In fact, that’s not the case.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
          <NavLink to="/Contact"> 
            <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600">
              Set an Appointment
            </button>
            </NavLink>
            <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
      <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-10">
        Quality Dental Services
      </h1>
      <p className="text-center text-lg mb-8">
        Our dentists provide a range of services to all ages and needs to keep
        their teeth and gums healthy for life.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={img15}
            alt="General Dentistry"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-red-600">General Dentistry</h3>
            <p className="mt-2">
              Our general dentistry services include a range of preventative and
              targeted treatments essential for maintaining healthy teeth and
              gums.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                Fillings
              </span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                Examination, scale & clean
              </span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                Children's dentistry
              </span>
              {/* Add other tags as necessary */}
            </div>
          </div>
        </div>

        {/* Dental Cosmetic */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={img16}
            alt="Dental Cosmetic"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-red-600">Dental Cosmetic</h3>
            <p className="mt-2">
              We know the first thing people notice about you is your smile. We
              deliver incredible cosmetic results that will have you smiling with
              confidence.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                Teeth whitening
              </span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                Crowns
              </span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                Veneers
              </span>
              {/* Add other tags as necessary */}
            </div>
          </div>
        </div>

        {/* Emergency Care */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={img17}
            alt="Emergency Care"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-red-600">Emergency Care</h3>
            <p className="mt-2">
              We provide emergency dental services if you have knocked out a
              tooth or are experiencing a severe toothache. Do not delay seeking
              medical treatment.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                Severe toothaches
              </span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                Bleeding gums
              </span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                Broken teeth
              </span>
              {/* Add other tags as necessary */}
            </div>
          </div>
        </div>
      </div>
    </div>

   
    </>
  )
}

export default Services
