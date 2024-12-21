"use client";

// import React, { useState } from 'react';
 "global.css";
import { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Cards from "@/components/Cards"
import Particles from '@/components/Particles';
import Wave from '@/components/Wave';
import TypeWriter from '@/components/TypeWriter';

const Home: NextPage = () => {

  return(
    <div className="">
      <Particles/>
      <Navbar/>
      <Cards/>
      <TypeWriter/>
      <Wave/>
    </div>

  )
};

export default Home;