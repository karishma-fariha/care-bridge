import React from 'react';
import Image from 'next/image';
import { Heart, ShieldCheck, Star, Users } from 'lucide-react';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <section className="py-24 bg-base-100 overflow-hidden">
            <div className="container mx-auto px-4 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                    {/* Left Side: Image with Experience Badge */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative w-full h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-base-200">
                            <Image 
                                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop" 
                                alt="CareBridge Team" 
                                fill 
                                className="object-cover"
                            />
                        </div>
                        
                        {/* Floating Experience Card */}
                        <div className="absolute -bottom-10 -right-0 md:-right-10 bg-primary p-8 rounded-[2.5rem] text-base-100 shadow-xl max-w-[250px]">
                            <div className="text-4xl font-black mb-1">10+</div>
                            <div className="text-sm font-bold uppercase tracking-wider opacity-90 leading-tight">
                                Years of Excellence in Home Care
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:w-1/2">
                        <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                            About CareBridge
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-black text-neutral mb-6 leading-tight">
                            Bridging the Gap Between <span className="text-primary">Love & Professional Care</span>
                        </h3>
                        <p className="text-neutral/60 text-lg mb-8 leading-relaxed">
                            Founded on the principle that every individual deserves to age or recover with dignity in the comfort of their own home, CareBridge connects families with the most compassionate, verified caregivers in the industry.
                        </p>

                        {/* Mission Pillars */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-base-200 border border-base-300">
                                <div className="text-primary bg-primary/10 p-3 rounded-xl">
                                    <Heart size={24} />
                                </div>
                                <span className="font-bold text-neutral">Compassion First</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-base-200 border border-base-300">
                                <div className="text-primary bg-primary/10 p-3 rounded-xl">
                                    <ShieldCheck size={24} />
                                </div>
                                <span className="font-bold text-neutral">Safety Guaranteed</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-base-200 border border-base-300">
                                <div className="text-primary bg-primary/10 p-3 rounded-xl">
                                    <Users size={24} />
                                    </div>
                                <span className="font-bold text-neutral">Expert Community</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-base-200 border border-base-300">
                                <div className="text-primary bg-primary/10 p-3 rounded-xl">
                                    <Star size={24} />
                                </div>
                                <span className="font-bold text-neutral">Top-Rated Staff</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <Link href={"/experts"} className="btn btn-primary rounded-xl px-8 shadow-lg shadow-primary/30">
                                Visit Our Experts
                            </Link>
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-base-100 overflow-hidden">
                                        <Image 
                                            src={`https://i.pravatar.cc/100?u=${i + 50}`} 
                                            alt="Team member" 
                                            width={40} 
                                            height={40} 
                                        />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full bg-neutral text-base-100 flex items-center justify-center text-[10px] font-bold border-2 border-base-100">
                                    +50
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;