import React from 'react';
import Logo from './Logo';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from 'react-icons/fi';
const Footer = () => {
    return (
        <div className="footer sm:footer-horizontal bg-neutral/80 text-neutral-content p-10">
            <div className="-mt-10">
                <Logo></Logo>
                <p className="text-xs w-60">
                    CareBridge connects you with certified caretakers for children, the elderly,
                    and medical assistance. Experience safety, comfort, and professional
                    support right at your doorstep.
                </p>
            </div>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>

            <div className="">

                <a href="https://github.com/karishma-fariha" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group">
                    <FaGithub size={20} />
                    <span className="text-[10px] font-bold group-hover:underline">GITHUB</span>
                </a>
                <a href="https://www.linkedin.com/in/karishma-fariha" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neutral-400 hover:text-blue-500 transition-colors group">
                    <FaLinkedinIn size={20} />
                    <span className="text-[10px] font-bold group-hover:underline">LINKEDIN</span>
                </a>
                <a href="mailto:karishmafarihakathi10@gmail.com" className="flex items-center gap-2 text-neutral-400 hover:text-secondary transition-colors group">
                    <FiMail size={20} />
                    <span className="text-[10px] font-bold group-hover:underline">EMAIL</span>
                </a>
                <div className="">
                    <p className='text-xl font-bold text-primary'>_Developer_</p>
                    <h3 className="text-lg font-black uppercase italic tracking-tighter">Karishma Fariha</h3>
                    {/* <p className="text-xs text-secondary font-bold uppercase tracking-[0.2em]">MERN_Stack_Architect</p> */}

                </div>
            </div>
        </div>
    );
};

export default Footer;