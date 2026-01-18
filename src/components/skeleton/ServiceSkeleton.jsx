import React from 'react';

const ServiceSkeleton = () => {
    
    return (
        <div className="card bg-base-100 shadow-xl border border-base-200 w-full">
            {/* Image Placeholder */}
            <div className="skeleton h-56 w-full rounded-b-none"></div>
            
            <div className="card-body p-6 gap-4">
                {/* Rating & Status Placeholder */}
                <div className="flex justify-between items-center">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-6 w-16"></div>
                </div>

                {/* Title Placeholder */}
                <div className="skeleton h-8 w-3/4"></div>
                
                {/* Info List Placeholder */}
                <div className="space-y-2 mt-2">
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-5/6"></div>
                </div>

                <div className="divider my-0"></div>

                {/* Price & Button Placeholder */}
                <div className="flex items-center justify-between mt-auto">
                    <div className="space-y-2">
                        <div className="skeleton h-3 w-12"></div>
                        <div className="skeleton h-8 w-24"></div>
                    </div>
                    <div className="skeleton h-8 w-20 rounded-lg"></div>
                </div>
                
                {/* Add to Cart Button Placeholder */}
                <div className="skeleton h-10 w-full rounded-lg mt-2"></div>
            </div>
        </div>
    );


};

export default ServiceSkeleton;