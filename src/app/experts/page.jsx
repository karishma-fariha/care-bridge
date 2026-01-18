import React from 'react';
import Link from 'next/link';
import { getCaregivers } from '@/actions/server/caregivers';
import CaregiverCard from '@/components/cards/CaregiverCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ExpertsPage = async ({ searchParams }) => {
    // 1. Get current page from URL (defaults to 1)
    const params = await searchParams;
    const currentPage = parseInt(params.page) || 1;
    const itemsPerPage = 8; // Showing 8 per page

    // 2. Fetch paginated data
    const { caregivers, totalPages } = await getCaregivers(currentPage, itemsPerPage);

    return (
        <div className="min-h-screen bg-base-100 py-20">
            <div className="container mx-auto px-4 md:px-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-neutral mb-4">
                        Our Professional <span className="text-primary">Caregivers</span>
                    </h1>
                    <p className="text-neutral/60 max-w-2xl mx-auto text-lg">
                        Page {currentPage} of {totalPages} — Showing our certified specialists.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {caregivers.map((staff) => (
                        <CaregiverCard key={staff._id.toString()} staff={staff} />
                    ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4">
                        {/* Previous Button */}
                        <Link
                            href={`/experts?page=${currentPage - 1}`}
                            className={`btn btn-circle btn-outline border-base-300 ${currentPage <= 1 ? 'btn-disabled' : 'hover:bg-primary hover:border-primary'}`}
                        >
                            <ChevronLeft />
                        </Link>

                        {/* Page Numbers */}
                        <div className="join border border-base-300 rounded-full bg-base-100 px-2">
                            {[...Array(totalPages)].map((_, index) => {
                                const pageNum = index + 1;
                                return (
                                    <Link
                                        key={pageNum}
                                        href={`/experts?page=${pageNum}`}
                                        className={`join-item btn btn-ghost btn-md rounded-full ${currentPage === pageNum ? 'bg-primary text-white hover:bg-primary' : 'text-neutral'}`}
                                    >
                                        {pageNum}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Next Button */}
                        <Link
                            href={`/experts?page=${currentPage + 1}`}
                            className={`btn btn-circle btn-outline border-base-300 ${currentPage >= totalPages ? 'btn-disabled' : 'hover:bg-primary hover:border-primary'}`}
                        >
                            <ChevronRight />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExpertsPage;