"use client";

// import Image from "next/image";
import Navbar from '../components/Navbar';
// import Cards from "@/components/Cards"
import Particles from '@/components/LandingPage';
import Wave from '@/components/Wave';
import TypeWriter from '@/components/TypeWriter';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
// import { Skill } from '@/components/Skill';

export default function Home() {
  return (
    <div className="">
      <Header />
      <Navbar />
      <Particles />
      <Projects />
      <TypeWriter />
      <Wave />
    </div>
  );
}
