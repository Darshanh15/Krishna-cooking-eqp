import React from 'react'

import './Home.scss'
import About from '../About/About'
import ThreeColumnSection from '../../components/Threesclumnsection/ThreeColumnSection';
import MissionVision from '../../components/Missionvision/MissionVision';
import WhyUs from '../../components/Whyus/WhyUs';
import CaseStudies from '../../components/Casestudies/CaseStudies';

function Home() {
  return (
    <>
      <section className="hero-slide">
      <div className="hero-overlay">
        <h1 className="hero-title">
          Trusted Partner for Premium Commercial Kitchen Equipment
        </h1>
        <p className="hero-subtitle">
          Custom-Built Solutions for Hotels, Bakeries & Industrial Kitchens — 2-Star to 7-Star Expertise
        </p>
        <div className="hero-buttons">
          <a href="#products" className="btn btn-primary">View Our Products</a>
          <a href="#contact" className="btn btn-outline-light">Request a Quote</a>
          <a href="#contact" className="btn btn-outline-light">Contact Us</a>
        </div>
      </div>
    </section>

    <About />
    <ThreeColumnSection />
    <MissionVision />
    <WhyUs />
    <CaseStudies />


    </>
  )
}

export default Home