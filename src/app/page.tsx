"use client";

// import Image from "next/image";
import Navbar from '../components/Navbar';
// import Cards from "@/components/Cards"
import Particles from '@/components/LandingPage';
import Wave from '@/components/Wave'
import Header from '@/components/Header';
import Projects from '@/components/Projects';
// import TimelineDemo from '@/components/Timeline';
// import { TypewriterEffect, TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import Education from '@/components/Education';
import About from '@/components/About';
import Footer from '@/components/Footer/Footer';

// const content: React.CSSProperties = {
//   minHeight: '100vh',
//   backgroundColor: '#131313',
//   position: 'relative',
//   zIndex: 1,
// };



export default function Home() {
  return (
    <div className="">
      <Header />
      <Navbar />
      <Particles />
      <About/>
      <Projects />
      <Education/>
      <Footer/>
    </div>
  );
}
