// src/App.js
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { LuArrowBigDownDash } from "react-icons/lu";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Custom Hook for Advanced Scroll Animation
const useAdvancedScrollAnimation = ({ triggerSelector, animationConfig, scrollTriggerConfig }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(triggerSelector);

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        animationConfig.from,
        {
          ...animationConfig.to,
          scrollTrigger: {
            trigger: element,
            start: scrollTriggerConfig.start || 'top 90%',
            end: scrollTriggerConfig.end || 'bottom 0%',
            scrub: scrollTriggerConfig.scrub || true,
            markers: scrollTriggerConfig.markers || false,
            pin: scrollTriggerConfig.pin || false,
            anticipatePin: scrollTriggerConfig.anticipatePin || 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [triggerSelector, animationConfig, scrollTriggerConfig]);
};

// Main App Component
const Projects = () => {
  useAdvancedScrollAnimation({
    triggerSelector: '.animateSection2',
    animationConfig: {
      from: { opacity: 0, scale: 0.5 },
      to: { opacity: 1, scale: 1 },
    },
    scrollTriggerConfig: {
      start: 'top 90%',
      end: 'bottom 0%',
    },
  });

  return (
    <div className="App bg-transparent ">
      <section className='h-screen ' >
           
          <div className="relative  isolate px-5 pt-14 lg:px-8">

        <div className="mx-auto max-w-2xl pt-24 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-purple-300 ring-1 ring-pink-800 hover:ring-gray-900">
              
              <a href="#" className="font-semibold text-indigo-600 p-4 ">
                <span aria-hidden="true" className="absolute inset-0" />
                PROJECTS <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-8xl font-bold tracking-tight text-teal-500 sm:text-6xl">
              PROJECTS
            </h1>
            {/* <p className="mt-6 text-lg leading-8 text-gray-300">
            Passionate MERN Stack Developer with a strong foundation in JavaScript and a deep understanding of full-stack web development. Proficient in MongoDB, Express.js, React.js, and Node.js, I specialize in building scalable, high-performance web applications. With a focus on clean code, maintainability, and user experience, I strive to deliver exceptional solutions that exceed client expectations.
            </p> */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md  text-9xl px-3.5 py-2.5 font-semibold text-green-800 shadow-sm hover:text-pink-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <LuArrowBigDownDash />
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>



      <div className="animateSection2" style={{ height: '100vh', background: '#6f61ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 className='text-2xl' >NexCart</h2>
      </div>
      <div className="animateSection2" style={{ height: '100vh', background: '#6f61ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 className='text-2xl'>Book Store</h2>
      </div>
      <div className="animateSection2" style={{ height: '100vh', background: '#6f61ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 className='text-2xl'>Library Management sysytem</h2>
      </div>


    </div>
  );
};

export default Projects;
