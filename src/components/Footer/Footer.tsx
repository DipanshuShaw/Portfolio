'use client';

// import React from 'react';
import './footer.scss'; // Optional: Import CSS if needed
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IconMailFilled } from '@tabler/icons-react';
import Wave from '../Wave';

const Footer = () => {
    return (
        <footer className="footer-section bg-black">
            <div className="">
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-4">
                            <div className="footer-widget">
                                <div className="footer-logo sm:float-left px-8" id='logo'>
                                    {/* <a href="index.html" className=' a shadowfilter max-[640px]:flex max-[640px]:justify-center '><Image  src={logo} alt="logo" className="sm:size-24 max-[640px]:size-28" /></a> */}
                                </div>
                                <div className="footer-text">
                                    <p className='max-[640px]:w-full max-[640px]:text-center max-[640px]:p-4 w-2/3 sm:h-24 content-center max-[640px]:text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Cras quis elit sit amet turpis dictum placerat. Curabitur vehicula eros vitae lacus volutpat, a convallis erat facilisis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 mb-4">
                            <div className="footer-widget grid grid-cols-2 mx-4">
                                <div className="mx-4">
                                    <h1 className='text-3xl my-2'>Contact Me</h1>
                                    <ul>
                                        <li className=""><IconMailFilled className='inline-block ' />Email</li>
                                        <li className="">Number</li>
                                        <li className="">LinkedIn</li>
                                        <li className="">Location bhej abhi aatu</li>
                                    </ul>
                                </div>
                                <div className="grid grid-cols-2">hello</div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 mb-2 text-center">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3 className='px-8'>Keep Connected </h3>
                                </div>
                                <div className="social-links justify-center sm:my-2 flex items-center">
                                    <a href="" className='a mx-8 my-0 flex justify-center items-center max-[640px]:mx-2'><FaInstagram className='fab size-6' size='24' /></a>
                                    <a href="" className='a mx-8 my-0 flex justify-center items-center max-[640px]:mx-2'><FaXTwitter className='fab size-6' size='24' /></a>
                                    <a href="" className='a mx-8 my-0 flex justify-center items-center max-[640px]:mx-2'><FaGithub className='fab size-6' size='24' /></a>
                                    <a href="" className='a mx-8 my-0 flex justify-center items-center max-[640px]:mx-2'><FaFacebookF className='fab size-6' size='24' /></a>
                                    <a href="" className='a mx-8 my-0 flex justify-center items-center max-[640px]:mx-2'><FaLinkedinIn className='fab  size-6' size='24' /></a>
                                </div>
                                <div className="footer-text max-[640px]:text-xs">
                                    <p>Don’t forget to subscribe to our new feeds, to not to miss any info.</p>
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

