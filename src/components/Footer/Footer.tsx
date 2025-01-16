'use client';

// import React from 'react';
import './footer.scss'; // Optional: Import CSS if needed
// import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IconMail, IconPhone, IconBrandLinkedin, IconMapPin} from '@tabler/icons-react';
import Wave from '../Wave';
import Link from 'next/link';
import {Link as ReactLink} from 'react-scroll';
import { ResumeBtn } from '../ui/ResumeBtn';
import { HireBtn } from '../ui/HireBtn';

const Footer = () => {
    return (
        <footer className="footer-section dark:bg-black bg-teal-50 dark:text-white text-black">
            <div className="">
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-4">
                            <div className="footer-widget sm:grid  min-[850px]:grid-cols-6 mx-4">
                                <div className="mx-4 col-span-2">
                                    <h1 className='text-2xl lg:text-3xl my-4  border-b-2 border-purple-800'>Contact Me</h1>
                                    <ul>
                                        <li className="leading-7"><IconMail className='inline-block ' />&nbsp;&nbsp; dip100shaw@gmail.com</li>
                                        <li className="leading-7"><IconPhone className='inline-block ' /> &nbsp;&nbsp;+91-9875560271</li>
                                        <li className="leading-7"><IconBrandLinkedin className='inline-block ' /> &nbsp;&nbsp;DipanshuShaw</li>
                                        <li className="leading-7"><IconMapPin className='inline-block ' /> &nbsp;&nbsp;Kolkata, West Bengal</li>
                                    </ul>
                                </div>
                                <div className="mx-4 sm:col-span-1">
                                    <h1 className='text-2xl lg:text-3xl my-4 border-b-2 border-purple-800'>Navigation</h1>
                                    <ul className='max-sm:flex gap-6 flex-wrap items-center justify-center max-sm:text-lg py-4'>
                                        <li className="leading-3 cursor-pointer"><span className="max-lg:hidden"> &rarr; &nbsp;&nbsp;</span><ReactLink to="home">Home</ReactLink> </li>
                                        <li className="leading-4 cursor-pointer"><span className="max-lg:hidden"> &rarr; &nbsp;&nbsp;</span><ReactLink to="about">About</ReactLink> </li>
                                        <li className="leading-4 cursor-pointer"><span className="max-lg:hidden"> &rarr; &nbsp;&nbsp;</span><ReactLink to="projects">Projects</ReactLink> </li>
                                        <li className="leading-4 cursor-pointer"><span className="max-lg:hidden"> &rarr; &nbsp;&nbsp;</span><ReactLink to="education">Education</ReactLink> </li>
                                        <li className="leading-4 cursor-pointer"><span className="max-lg:hidden"> &rarr; &nbsp;&nbsp;</span><Link href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:b8467ca6-61a7-491e-ac05-91a4a3591562">Resume</Link> </li>
                                        <li className="leading-4 cursor-pointer"><span className="max-lg:hidden"> &rarr; &nbsp;&nbsp;</span><Link href="https://drive.google.com/drive/folders/19Mg6wOwx_b5l8QmBMoDY3Fwnw5Kgl8h0?usp=sharing">Certificate</Link> </li>
                                    </ul>
                                </div>
                                <div className="mx-4 max-md:my-6 md:mx-8 col-span-3 flex items-center">
                                    <div>
                                    <h1 className='text-4xl lg:text-5xl yatra-one-regular text-purple-900'>Dipanshu Shaw</h1>
                                    <div className=' py-4'>
                                    Designed and developed by Dipanshu Kumar Shaw, a web developer and engineering student passionate about crafting innovative and user-friendly web solutions. Skilled in Next.js, React, TypeScript, and Tailwind CSS, I thrive on turning ideas into reality. Let’s connect and create something exceptional together!
                                    </div>
                                    <div className="max-sm:grid gap-6 sm:space-x-8">
                                    <ResumeBtn/>
                                    <HireBtn/>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 mb-2 text-center">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3 className='px-8 border-b-2 border-purple-800'>Keep Connected </h3>
                                </div>
                                <div className="social-links justify-center sm:my-2 flex items-center">
                                    <Link target='_blank' href="https://www.instagram.com/dipanshu.shaw01" className='a mx-8 my-0 flex justify-center items-center max-[640px]:mx-2'><FaInstagram className='fab size-6' size='24' /></Link>
                                    <Link target='_blank' href="https://x.com/DipanshuShaw01" className='a mx-8 my-0 flex justify-center items-center max-[640px]:mx-2'><FaXTwitter className='fab size-6' size='24' /></Link>
                                    <Link target='_blank' href="https://github.com/DipanshuShaw" className='a mx-8 my-0 flex justify-center items-center max-[640px]:mx-2'><FaGithub className='fab size-6' size='24' /></Link>
                                    <Link target='_blank' href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100094091949466" className='a mx-8 my-0 flex justify-center items-center max-[640px]:mx-2'><FaFacebookF className='fab size-6' size='24' /></Link>
                                    <Link target='_blank' href="https://www.linkedin.com/in/dipanshu-shaw" className='a mx-8 my-0 flex justify-center items-center max-[640px]:mx-2'><FaLinkedinIn className='fab  size-6' size='24' /></Link>
                                </div>
                                <div className="footer-text max-[640px]:text-xs">
                                    <p>Contact me on social platforms for a faster response.</p>
                                </div>
                                <div className="copyright-text max-[640px]:text-xs">
                <p>Copyright &copy; 2024, All Rights Reserved. Designed By <a className='a' href="#" target=''>Dipanshu Shaw</a></p>
            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Wave/>
        </footer>
    );
};

export default Footer;

