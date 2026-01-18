import React from 'react';
import Link from 'next/link';
import { getCaregivers } from '@/actions/server/caregivers';
import CaregiverCard from '../cards/CaregiverCard';

const ExpertCaregivers = async () => {
    // 1. Destructure 'caregivers' from the returned object
    // We pass (1, 4) to get page 1 with a limit of 4
    const { caregivers } = await getCaregivers(1, 4);

    return (
        <section className="py-24 bg-base-200">
            <div className="container mx-auto px-4 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Our Dedicated Team</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-neutral mb-0">Meet Our <span className="text-primary">Expert</span> Caregivers</h3>
                    </div>
                    <Link href="/experts" className="btn btn-outline btn-primary rounded-2xl px-8 font-bold border-2">
                        View All Experts
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* 2. Check if caregivers exists before mapping */}
                    {caregivers && caregivers.length > 0 ? (
                        caregivers.map((staff) => (
                            <CaregiverCard key={staff._id.toString()} staff={staff} />
                        ))
                    ) : (
                        <p className="text-center col-span-full text-neutral/50">No caregivers found.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ExpertCaregivers;