"use client";

import Navbar from '../components/Navbar';
import Particles from '@/components/LandingPage';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import About from '@/components/About';
import Footer from '@/components/Footer/Footer';
import { Skill } from '@/components/Skill';



export default function Home() {
  return (
    <div className="">
      <Header />
      <Navbar />
      <Particles />
      <About/>
      <Projects />
      <Education/>
      <div className='dark:bg-zinc-900 bg-stone-100'>
      <Skill/>
      </div>
      <Footer/>
    </div>
  );
}
