"use client";

// import Image from "next/image";
import Navbar from '../components/Navbar';
import Cards from "@/components/Cards"
import Particles from '@/components/LandingPage';
import Wave from '@/components/Wave';
import TypeWriter from '@/components/TypeWriter';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="">
      <Header/>
            <Particles/>
      <Navbar/>
      <Cards/>
      <TypeWriter/>
      <Wave/>
    </div>
  );
}
