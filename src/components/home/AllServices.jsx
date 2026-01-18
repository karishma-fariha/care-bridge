import React from 'react';
import ServiceCard from '@/components/cards/ServiceCard';
import { getServices } from '@/actions/server/service';
import { cookies } from 'next/headers';
import Link from 'next/link';
import ServiceFilter from './ServiceFilter';

const AllServices = async ({ searchParams }) => {
    // Extract values from URL
    const params = await searchParams;
    const search = params?.search || "";
    const sort = params?.sort || "";
    const page = parseInt(params?.page) || 1;

    const { services, totalPages } = await getServices(search, sort, page, 8);
    const cookieStore = await cookies();
    const isLoggedIn = cookieStore.has("auth_token");

    return (
        <div className='bg-base-100 px-4 md:px-12 py-12'>
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Services</h2>
                <h3 className="text-4xl md:text-5xl font-black text-gray-800">Quality Care You Can <span className="text-primary">Trust</span></h3>
            </div>

            {/* Search and Sort Controls */}
            <ServiceFilter search={search} sort={sort}></ServiceFilter>

            {/* Services Grid */}
            {services.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {services.map(service => (
                        <ServiceCard 
                            isLoggedIn={isLoggedIn}
                            key={service._id.toString()} 
                            service={service} 
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-2xl font-bold text-gray-400">No services found for "{search}"</p>
                    <Link href="/services" className="btn btn-ghost text-primary mt-4">Clear All Filters</Link>
                </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-2">
                    {[...Array(totalPages)].map((_, i) => (
                        <Link 
                            key={i}
                            href={`/services?search=${search}&sort=${sort}&page=${i + 1}`}
                            className={`btn btn-square rounded-xl ${page === i + 1 ? 'btn-primary' : 'btn-ghost border border-base-300'}`}
                        >
                            {i + 1}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllServices;