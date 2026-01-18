import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineReportGmailerrorred } from "react-icons/md";
const Error404 = () => {
    return (
        <div className='flex flex-col min-h-screen justify-center items-center gap-5'>
           <MdOutlineReportGmailerrorred size={100} className='text-primary'/>
           <h2 className='text-4xl font-bold'>Page Not Found!</h2>
           <Link href={"/"} className='btn btn-primary'>Go to Home</Link>
        </div>
    );
};

export default Error404;