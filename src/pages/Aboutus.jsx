// AboutUs.js
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: 'Rushikesh',
    role: 'Frontend Developer',
    description: 'Specializing in React, he is the creative force behind the website\'s dynamic animations and interactive user interface.',
    avatar: '/images/rishi.jpeg',
    github: '#',
    linkedin: '#',
  },
  {
    name: 'Vedant',
    role: 'Frontend Developer',
    description: 'A versatile developer with a keen eye for design, he meticulously crafted the HTML, CSS, and JavaScript, and handled the website\'s seamless deployment.',
    avatar: '/images/vadent.jpg',
    github: '#',
    linkedin: '#',
  },
  {
    name: 'Anmol',
    role: 'Backend Developer',
    description: 'He engineered the robust backend, building the authentication forms and meticulously preparing the project\'s presentation and documentation.',
    avatar: '/images/anmol.jpeg',
    github: '#',
    linkedin: '#',
  },
  {
    name: 'Rishab',
    role: 'Backend Developer',
    description: 'Responsible for the project\'s automation and integrations, he expertly developed and managed the critical n8n workflows.',
    avatar: '/images/rishab.jpeg',
    github: '#',
    linkedin: '#',
  },
];

const AboutUs = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    gsap.utils.toArray('.fade-in-section').forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div className={`min-h-screen p-8 flex flex-col font-poppins 
                    ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} 
                    transition-colors duration-300 ease-in-out`}>
      <header className="mt-[100px] flex justify-between items-center py-4 mb-8">
        <h1 className="text-4xl font-bold">About Team Diamonds</h1>
        <button onClick={toggleTheme} className="p-2 rounded-full hover:scale-110 transition-transform duration-300 text-current">
          {theme === 'dark' ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
      </header>
      
      <main className="flex-grow">
        <section className="team-section mb-16 fade-in-section opacity-0 translate-y-12">
          <h2 className="text-3xl font-semibold mb-6 pb-2 border-b-4 border-red-500 inline-block">Team Diamonds</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} 
                   className={`member-card p-8 rounded-xl text-center relative 
                               ${theme === 'dark' ? 'bg-gray-900 shadow-xl' : 'bg-gray-100 shadow-lg'} 
                               hover:translate-y-[-10px] hover:scale-[1.02] transition-all duration-300 ease-in-out`}>
                <div className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-red-500 overflow-hidden 
                                transform hover:rotate-6 transition-transform duration-300 ease-in-out"
                     style={{ backgroundImage: `url(${member.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
                <h3 className="text-2xl font-semibold mt-2 mb-1">{member.name}</h3>
                <p className="text-red-500 font-medium mb-4">{member.role}</p>
                <p className={`text-sm leading-relaxed 
                               ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {member.description}
                </p>
                <div className="flex justify-center mt-4 space-x-4">
                  <a href={member.github} target="_blank" rel="noopener noreferrer" 
                     className={`text-xl 
                                 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} 
                                 hover:text-red-500 transition-colors duration-300`}>
                    <FaGithub />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" 
                     className={`text-xl 
                                 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} 
                                 hover:text-red-500 transition-colors duration-300`}>
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className={`goal-section mt-16 p-16 rounded-xl text-center fade-in-section opacity-0 translate-y-12
                              ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} 
                              transition-colors duration-300 ease-in-out`}>
          <div className="goal-content">
            <h2 className="text-4xl font-bold text-red-500 mb-4">Our Goal</h2>
            <p className={`max-w-3xl mx-auto text-lg leading-relaxed 
                           ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Our objective for this end-semester project was to develop a comprehensive web application that not only demonstrates our technical proficiency but also provides a seamless and intuitive user experience. We focused on integrating robust backend functionalities with a polished, responsive frontend design.
            </p>
          </div>
        </section>
      </main>

      <footer className={`text-center py-8 mt-16 text-sm 
                          ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Team Diamonds. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
