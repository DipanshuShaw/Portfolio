import React, { useState } from 'react'
import AboutText from './ui/AboutText'
import Image from 'next/image'
import ExImage from "@/../../public/codeImage.jpg"


const About = () => {
const ExpContent = <div><ul>
  <li className="">Tech Core Member of BYTE Club NIE</li>
  <li className="">180+ contributions</li>
  <li className="">15+ Projects</li>
  <li className="">3 Hackathons</li>
  </ul></div>
const techContent = <div className=''>
  <ul className="grid grid-cols-2">
    <li className="">Next js</li>
    <li className="">React js</li>
    <li className="">Typescript</li>
    <li className="">Node js</li>
    <li className="">Tailwind CSS</li>
    <li className="">Mongo DB</li>
  </ul>
</div>

  const [AboutContent,setAboutContent] = useState(ExpContent);

  const handleExpClick=()=>{
      setAboutContent(ExpContent)
  }
  const handleTechClick=()=>{
      setAboutContent(techContent)
  }



  return (
    <div className='p-4 pt-8 bg-stone-100 dark:bg-neutral-950' id="about">
      <AboutText/>
      <div className="m-16 grid grid-cols-2">
        <div className="text-center w-11/12">
          <Image src={ExImage} alt="alt"  />
        </div>
        <div className="mx-8 text-xl">
          I am <span className='text-indigo-700 text-2xl'>Dipanshu Kumar Shaw</span>, a web developer currently pursuing an engineering degree in Information Technology at NIE Mysore. I specialize in building dynamic and scalable web applications using <span className='text-indigo-700'>Next.js</span>, <span className='text-indigo-700'>React</span>, <span className='text-indigo-700'>MongoDB</span>, <span className='text-indigo-700'>Tailwind CSS</span>, <span className='text-indigo-700'>Node.js</span>, and <span className='text-indigo-700'>TypeScript</span>. I am passionate about creating efficient solutions and continuously enhancing my skills through academic projects and practical experience.
          <div className='grid grid-cols-2 bg-gradient-to-b from-pink-500 to-indigo-600 via-purple-500 text-transparent bg-clip-text'>
            <button onClick={handleExpClick} className='text-center border-b-2 border-opacity-5 dark:hover:border-white hover:border-black'>Experience</button>
            <button onClick={handleTechClick} className='text-center border-b-2 border-opacity-5 dark:hover:border-white hover:border-black'>Tech Stack</button>
          </div>
          <div className='mt-2 mx-4'>{AboutContent}</div>
          </div>
      </div>
    </div>
  )
}

export default About
