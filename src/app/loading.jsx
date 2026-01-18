import Logo from '@/components/layouts/Logo';
import React from 'react';

const loading = () => {
    return (
         <div className='flex flex-col min-h-screen justify-center items-center gap-5'>
           <h2 className='text-5xl text-primary font-bold'>L<span className='animate-spin'>🎯</span>ADING</h2>
           <Logo></Logo>
        </div>
    );
};

export default loading;