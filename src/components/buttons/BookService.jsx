"use client"
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';

const BookService = ({service}) => {
    return (
        <div>
           <Link href={"/cart"} className='btn btn-primary'>
                <FiShoppingCart></FiShoppingCart>
                </Link> 
        </div>
    );
};

export default BookService;