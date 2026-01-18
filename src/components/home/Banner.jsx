"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = ["/assets/Img1.jpg", "/assets/Img5.jpg", "/assets/Img4.jpg"];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="hero min-h-[85vh] bg-base-200 px-4 md:px-12 py-12 overflow-hidden">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 max-w-none w-full">
                
                {/* Image Side - Larger and properly scaled */}
                <div className="relative w-full lg:w-1/2 flex flex-col items-center lg:items-end">
                    <div className="relative w-full max-w-137.5 aspect-4/3 md:aspect-square lg:aspect-4/5 rounded-[2.5rem] border-12 border-white shadow-2xl overflow-hidden bg-white">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                    index === currentSlide ? "opacity-100" : "opacity-0"
                                }`}
                            >
                                <Image
                                    fill
                                    src={src}
                                    alt={`Care Service ${index + 1}`}
                                    className="object-cover"
                                    priority={index === 0}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Progress Pills */}
                    <div className="flex justify-center gap-3 mt-6 w-full max-w-137.5">
                        {images.map((_, index) => (
                            <div 
                                key={index}
                                className={`h-2 transition-all duration-500 rounded-full ${
                                    index === currentSlide ? "w-12 bg-primary" : "w-3 bg-gray-300"
                                }`}
                            />
                        ))}
                    </div>

                    {/* Floating Card - Repositioned for larger image */}
                    <div className="absolute bottom-12 -left-4 md:-left-8 bg-white p-5 rounded-2xl shadow-2xl hidden md:block z-20 border border-gray-50">
                        <div className="flex items-center gap-4">
                            <div className="avatar placeholder">
                                <div className="bg-success text-success-content rounded-full w-10 flex items-center justify-center font-bold">
                                    <span>✓</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-tight">Verified Caretakers</p>
                                <p className="text-lg font-black text-gray-800">1,200+ Active</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <div className="badge badge-primary badge-outline mb-6 py-4 px-6 font-bold uppercase tracking-widest text-xs">
                            Verified Care Platform
                    </div>
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.1]">
                        Reliable Care for Your <span className="text-primary">Loved Ones</span>
                    </h1>
                    <p className="py-8 text-lg md:text-xl text-base-content/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        CareBridge connects you with certified caretakers for children, the elderly,
                        and medical assistance. Experience safety, comfort, and professional
                        support right at your doorstep.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                        <Link href={"/login"} className="btn btn-primary btn-lg rounded-full px-10 shadow-xl shadow-primary/30 text-lg">
                           Get Start 
                        </Link>
                        <Link href={"/services"} className="btn btn-primary btn-outline btn-lg rounded-full px-10 border-2 hover:bg-primary text-lg">
                            Book a Service
                        </Link>
                    </div>

                    {/* Trust Metrics */}
                    <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start opacity-80">
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-primary">4.9/5</span>
                            <span className="text-xs uppercase font-bold tracking-wider text-gray-500">User Rating</span>
                        </div>
                        <div className="divider divider-horizontal hidden sm:flex"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-primary">24/7</span>
                            <span className="text-xs uppercase font-bold tracking-wider text-gray-500">Support</span>
                        </div>
                        <div className="divider divider-horizontal hidden sm:flex"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-primary">100%</span>
                            <span className="text-xs uppercase font-bold tracking-wider text-gray-500">Verified</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;