import ServiceSkeleton from '@/components/skeleton/ServiceSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {
                [...Array(9)].map((_, index) => (
                   <ServiceSkeleton key={index}></ServiceSkeleton> 
                ))
            }
        </div>
    );
};

export default loading;