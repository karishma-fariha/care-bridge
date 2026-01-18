import React from 'react';
import ServiceCard from '../cards/ServiceCard';
import Link from 'next/link';
import { getFeaturedServices } from '@/actions/server/service';
import { cookies } from 'next/headers';

const Services = async() => {
    const services = (await getFeaturedServices()) || [] ;
    const cookieStore = await cookies();
    const isLoggedIn = cookieStore.has("auth_token");
   
    return (
        <div className='bg-base-100 px-4 md:px-12'>
            <div className="text-center mb-16">
                <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Services</h2>
                <h3 className="text-4xl md:text-5xl font-black text-gray-800">Quality Care You Can <span className="text-primary">Trust</span></h3>
                <p className="max-w-2xl mx-auto mt-4 text-gray-500">Choose from our specialized care categories designed to support your family's health and happiness.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {services.map(service => (
                    <ServiceCard key={service.id} 
                    service={service} 
                    isLoggedIn={isLoggedIn}/>
                ))}
            </div>
            <div className="flex justify-center mt-12">
                <Link href={"/services"} className="btn btn-outline btn-primary px-10 rounded-full">See All Services</Link>
            </div>
        </div>
    );
};

export default Services;