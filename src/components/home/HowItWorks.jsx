import React from 'react';
import { Search, UserCheck, CalendarCheck } from 'lucide-react';
import Link from 'next/link';

const HowItWorks = () => {
    const steps = [
        {
            icon: <Search className="w-8 h-8" />,
            title: "Find a Service",
            description: "Browse our categorized care services like Baby Care, Elderly Care, or Sick Support to find exactly what you need."
        },
        {
            icon: <UserCheck className="w-8 h-8" />,
            title: "Choose a Caregiver",
            description: "Review professional profiles, verified ratings, and specialized certifications to find the perfect match."
        },
        {
            icon: <CalendarCheck className="w-8 h-8" />,
            title: "Book & Relax",
            description: "Schedule your care hours securely. Our platform handles the insurance and background checks for you."
        }
    ];

    return (
        <section className="bg-base-100 overflow-hidden">
            <div className="container mx-auto px-4 md:px-12">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                        Simple Process
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-black text-neutral">
                        How to Get <span className="text-primary">Started</span>
                    </h3>
                </div>

                {/* Steps Flow */}
                <div className="relative">
                    {/* Background Connector Line (Visible on Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-base-200 -translate-y-1/2"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                {/* Step Number & Icon */}
                                <div className="relative mb-8">
                                    {/* Circle Container */}
                                    <div className="w-24 h-24 rounded-full bg-base-100 border-4 border-base-200 flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-base-100 transition-all duration-500 shadow-lg">
                                        {step.icon}
                                    </div>
                                    
                                    {/* Number Badge */}
                                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-neutral text-base-100 flex items-center justify-center font-black text-sm border-4 border-base-100">
                                        0{index + 1}
                                    </div>
                                </div>

                                {/* Content */}
                                <h4 className="text-2xl font-bold text-neutral mb-4 group-hover:text-primary transition-colors">
                                    {step.title}
                                </h4>
                                <p className="text-neutral/60 max-w-xs leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-20 text-center">
                    <div className="inline-flex flex-col md:flex-row items-center gap-6 p-6 rounded-[2rem] bg-base-200 border border-base-300">
                        <p className="font-bold text-neutral">Ready to provide the best care for your family?</p>
                        <Link href={"/services"} className="btn btn-primary rounded-xl px-10 shadow-lg shadow-primary/30">
                            Find Care Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;