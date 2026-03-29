import React from 'react'
import Navbar from './layout/Navbar'
import Hero from './section/Hero'
import Skiils from './section/Skiils'
import Projects from './section/Projects'
import About from './section/About';
import Experience from './section/Experience';
import Price from './section/Price';
import Testimonial from './section/Testimonial';
import Contact from './section/Contact';

const App = () => {
  return (
    <div className='min-h-screen overscroll-x-hidden'>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Skiils/>
        <Projects/>
        <Experience/>
        <Price/>
        <Testimonial/>
        <Contact/>
      </main>
    </div>
  )
}

export default App
