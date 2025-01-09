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
import { ResumeBtn } from '../ui/ResumeBtn';
import { HireBtn } from '../ui/HireBtn';

const Footer = () => {
    return (
        <footer className="footer-section dark:bg-black bg-teal-50 dark:text-white text-black">
            <div className="">
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-4">
                            <div className="footer-widget grid grid-cols-6 mx-4">
                                <div className="mx-4 col-span-2">
                                    <h1 className='text-3xl my-4  border-b-2 border-purple-800'>Contact Me</h1>
                                    <ul>
                                        <li className="leading-7"><IconMail className='inline-block ' />&nbsp;&nbsp; dip100shaw@gmail.com</li>
                                        <li className="leading-7"><IconPhone className='inline-block ' /> &nbsp;&nbsp;+91-9875560271</li>
                                        <li className="leading-7"><IconBrandLinkedin className='inline-block ' /> &nbsp;&nbsp;DipanshuShaw</li>
                                        <li className="leading-7"><IconMapPin className='inline-block ' /> &nbsp;&nbsp;Kolkata, West Bengal</li>
                                    </ul>
                                </div>
                                <div className="mx-4 col-span-1">
                                    <h1 className='text-3xl my-4 border-b-2 border-purple-800'>Navigation</h1>
                                    <ul>
                                        <li className="leading-2 ">&rarr; &nbsp;&nbsp;<Link href="href">About</Link> </li>
                                        <li className="leading-2 ">&rarr; &nbsp;&nbsp;<Link href="href">Projects</Link> </li>
                                        <li className="leading-2 ">&rarr; &nbsp;&nbsp;<Link href="href">Education</Link> </li>
                                        <li className="leading-2 ">&rarr; &nbsp;&nbsp;<Link href="href">Resume</Link> </li>
                                        <li className="leading-2 ">&rarr; &nbsp;&nbsp;<Link href="href">Certificate</Link> </li>
                                    </ul>
                                </div>
                                <div className="mx-8 col-span-3 flex items-center">
                                    <div>
                                    <h1 className='text-5xl yatra-one-regular text-purple-900'>Dipanshu Shaw</h1>
                                    <div className='py-4'>
                                    Designed and developed by Dipanshu Kumar Shaw, a web developer and engineering student passionate about crafting innovative and user-friendly web solutions. Skilled in Next.js, React, TypeScript, and Tailwind CSS, I thrive on turning ideas into reality. Let’s connect and create something exceptional together!
                                    </div>
                                    <ResumeBtn/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <HireBtn/>
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

