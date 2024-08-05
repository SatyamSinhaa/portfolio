import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>Hi, I'm Satyam Sinha, a 2023 graduate 🎓 with a dedication to building scalable and efficient Java-based web applications. As a <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/satyam-sinha-0397b8296/' target='_blank'>Software developer</a>, I specialize in Java full stack development 🚀, delivering seamless and high-performing solutions from front to back.
              <br />
              ✍️ Beyond coding, I love exploring the latest advancements in technology and constantly improving my skills. Whether it's learning new programming languages, experimenting with innovative software solutions, or staying updated with industry trends, I'm always eager to expand my knowledge and share it with others. 🎮 Beyond the tech world, gaming is my passion . Gaming isn't just a pastime; it's a way to immerse myself in different worlds and experience diverse stories. This hobby helps me relax and recharge, balancing my passion for technology with some fun and immersive experiences.</p>

            <ButtonLink
              url='https://drive.google.com/file/d/1LARI3kKyh7_ZN3EmmEhz2A4rI6rOwUsl/view?usp=drive_link'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;