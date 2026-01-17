import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={"/"} className=''>
        <Image 
        className='ml-4'
        alt='logo' 
        src={"/assets/care_bridge.png"} 
        width={80} 
        height={70}/>
        <h2 className='text-xl font-bold -mt-6'>Care <span className='text-primary'>Bridge</span></h2>
        </Link>
    );
};

export default Logo;