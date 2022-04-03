import * as React from "react"
import { useState } from "react";

import AOS from 'aos';

import '../index.css';
import '../styles.scss';
import 'aos/dist/aos.css';

import Layout from "../components/Layout";
import IntroSection from '../components/IntroSection';
import ServicesSection from '../components/ServicesSection';
import ProjectSection from '../components/ProjectSection';
import ProjectSectionNew from "../components/ProjectSectionNew";
// import TestimonialsSection from "../components/TestimonialsSection";
import ServicePopup from "../components/ServicePopup";
import ProjectScreen from "../components/ProjectScreen";


const IndexPage = () => {
  const [serviceScreen, setServiceScreen] = useState({id: -1, isOpen: false});
  const [projectScreen, setProjectScreen] = useState({id: -1, isOpen: false});

  AOS.init({
    offset: 200,
    duration: 500,
    easing: 'ease-in-out',
    delay: 100,
    once: true,
  });

  return (
    <Layout>
      <IntroSection />
      {/* <div className="gradient-half-section"><h1>Delivering Solutions - Exceptional, Effective, Efficient</h1></div> */}
      <ServicesSection setServiceScreen={setServiceScreen} />
      <ProjectSectionNew setProjectScreen={setProjectScreen}/>
      {/* <ProjectSection setProjectScreen={setProjectScreen} /> */}
      <ServicePopup serviceScreen={serviceScreen} setServiceScreen={setServiceScreen} />
      <ProjectScreen projectScreen={projectScreen} setProjectScreen={setProjectScreen} />
    </Layout>
  )
}

export default IndexPage
