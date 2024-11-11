import React from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';
import img1 from '/images/nishi2.png';
import img2 from '/images/nishi3.png';
import img4 from '/images/nishi4.png';
import img5 from '/images/nishi5.png';
import img6 from '/images/nishi6.png';
import img7 from '/images/nishi7.png';
import img8 from '/images/nishi8.png';
import img9 from '/images/nishi9.png';
import img10 from '/images/nishi10.png';
import img13 from '/images/nishi13.webp';
import img14 from '/images/nishi14.webp';

function Home() {
  return (
    <div>
      {/* Main Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 max-w-7xl mx-auto">
        {/* Left Section (Text) */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-red-700 font-bold">
            <div className="typewriter">
              <h1 className='headone'>Nek FAMILY DENTAL AND AESTHETIC CARE.</h1>
            </div>
          </h1>
          <h2 className="text-5xl font-semibold leading-tight">
            <div className="typewriter">
              <h1 className='headtwo'>Local dentists who love <br /> to make you smile</h1>
            </div>
          </h2>
          <p className="text-gray-500 mt-4">
            Discover a level of dental care like no other.
          </p>
          <div className="space-x-4 servicebtns  mt-6">
            <NavLink to="/contact">
              <button class="contactbtn relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-lime-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
        before:-right-full before:hover:right-0 before:rounded-full  before:bg-lime-500 before:-z-10 
         before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">Book an Appointment
              </button>
            </NavLink>
            <NavLink to="/Services">
              <button class="servicebtn relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-lime-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
        before:-right-full before:hover:right-0 before:rounded-full  before:bg-lime-500 before:-z-10 
         before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"> Browse our Service
              </button>
            </NavLink>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src={img1} alt="Smiling Person" className="rounded-lg shadow-lg" />
        </div>
      </section>


      {/* Services Section */}
      <section className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto p-8 space-y-6 md:space-y-0 service_card_sec">
        <div className="service-card">
          <img src={img4} alt="Preventive Icon" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Preventive Guidance</h3>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="service-card">
          <img src={img2} alt="Service Icon" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Friendly Service</h3>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="service-card">
          <img src={img5} alt="Technology Icon" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Dental Technology</h3>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="p-md-11">
        <div className="max-w-7xl mx-auto p-md-8 p-4 text-center">
          <h1 className="text-red-700 text-sm font-bold uppercase mb-2 headone">Welcome to Halifax Family Dental Care</h1>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 hover:bg-black lg:hover:bg-transparent lg:border-0 hover:text-gray-700">
            Creating beautiful smiles for all ages
          </h2>
          <p className="text-gray-600 mb-12">
            We are a family dental practice that has earned the trust of our patients through honesty, efficiency, and good communication.
          </p>
        </div>

        {/* Image Cards Section */}
        <div className="flex flex-col md:flex-row justify-around items-center gap-6">
          <div className="image-card">
            <img src={img6} alt="Family Smiling" />
          </div>
          <div className="image-card">
            <img src={img7} alt="Smiling Woman" />
          </div>
          <div className="image-card">
            <img src={img8} alt="Happy Patient" />
          </div>
          <div className="image-card">
            <img src={img9} alt="Man Smiling" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto p-md-8 p-4  flex flex-row md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="stat">
          <h3 className="text-3xl text-red-700 font-bold">10<span className="text-xl">+</span></h3>
          <p className="text-gray-600">Years of Experience</p>
        </div>
        <div className="stat mt-0">
          <h3 className="text-3xl text-red-700 font-bold">200<span className="text-xl">+</span></h3>
          <p className="text-gray-600">Satisfied Clients</p>
        </div>
        <div className="stat mt-0">
          <h3 className="text-3xl text-red-700 font-bold">20<span className="text-xl">+</span></h3>
          <p className="text-gray-600">Certified Dentists</p>
        </div>
      </section>


      {/* grid for cards */}



      {/* Flip Cards Section */}
      <div className="flex justify-md-evenly justify-center flex-col p-8">

        {/* <div class="container">
          <div class="row">

            <div class="col-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={img10} alt="Avatar" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                    <h1>Cleanings and Exams</h1>
                  </div>
                  <div className="flip-card-back">
                    <h1>Cleanings and Exams</h1>
                    <p>Having a dental practice perform a checkup and regular cleaning gives a preventive approach to dental care.</p>
                    <NavLink to="/Services">
                      <button
                        class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                      >
                        <span
                          class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                        >
                          <span
                            class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                          ></span>
                        </span>
                        <span
                          class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                        >
                          <span
                            class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                          ></span>
                        </span>
                        <span
                          class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                        ></span>
                        <span
                          class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                        >Get Started</span>
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={img13} alt="Avatar" />
                    <h1>Digital X-Rays</h1>
                  </div>
                  <div className="flip-card-back">
                    <h1>Digital X-Rays</h1>
                    <p>Digital X-Rays help examine the inside of your teeth and catch hidden problems.</p>
                    <NavLink to="/Services">
                      <button
                        class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                      >
                        <span
                          class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                        >
                          <span
                            class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                          ></span>
                        </span>
                        <span
                          class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                        >
                          <span
                            class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                          ></span>
                        </span>
                        <span
                          class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                        ></span>
                        <span
                          class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                        >Get Started</span
                        >
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={img14} alt="Avatar" />
                    <h1>Dental Implants</h1>
                  </div>
                  <div className="flip-card-back">
                    <h1>Dental Implants</h1>
                    <p>Dental implants provide an alternative solution to missing teeth.</p>
                    <NavLink to="/Services">
                      <button
                        class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                      >
                        <span
                          class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                        >
                          <span
                            class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                          ></span>
                        </span>
                        <span
                          class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                        >
                          <span
                            class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                          ></span>
                        </span>
                        <span
                          class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                        ></span>
                        <span
                          class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                        >Get Started</span
                        >
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="flip-card col-4">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={img10} alt="Avatar" className="rounded-lg shadow-lg w-full h-auto object-cover" />
              <h1>Cleanings and Exams</h1>
            </div>
            <div className="flip-card-back">
              <h1>Cleanings and Exams</h1>
              <p>Having a dental practice perform a checkup and regular cleaning gives a preventive approach to dental care.</p>
              <NavLink to="/Services">
                <button
                  class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                >
                  <span
                    class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                  >
                    <span
                      class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                    ></span>
                  </span>
                  <span
                    class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                  >
                    <span
                      class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                    ></span>
                  </span>
                  <span
                    class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                  ></span>
                  <span
                    class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                  >Get Started</span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={img13} alt="Avatar" />
              <h1>Digital X-Rays</h1>
            </div>
            <div className="flip-card-back">
              <h1>Digital X-Rays</h1>
              <p>Digital X-Rays help examine the inside of your teeth and catch hidden problems.</p>
              <NavLink to="/Services">
                <button
                  class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                >
                  <span
                    class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                  >
                    <span
                      class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                    ></span>
                  </span>
                  <span
                    class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                  >
                    <span
                      class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                    ></span>
                  </span>
                  <span
                    class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                  ></span>
                  <span
                    class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                  >Get Started</span
                  >
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={img14} alt="Avatar" />
              <h1>Dental Implants</h1>
            </div>
            <div className="flip-card-back">
              <h1>Dental Implants</h1>
              <p>Dental implants provide an alternative solution to missing teeth.</p>
              <NavLink to="/Services">
                <button
                  class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                >
                  <span
                    class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                  >
                    <span
                      class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                    ></span>
                  </span>
                  <span
                    class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                  >
                    <span
                      class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                    ></span>
                  </span>
                  <span
                    class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                  ></span>
                  <span
                    class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                  >Get Started</span
                  >
                </button>
              </NavLink>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
