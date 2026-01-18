import React from 'react';
import Logo from './Logo';
import NavLink from '../buttons/NavLink';
import Link from 'next/link';
import { cookies } from 'next/headers'; // Added for auth check
import { logoutAction } from '@/actions/auth'; // Import your logout action

const Navbar = async () => {
    // Check if the user is logged in by looking for the cookie
    const cookieStore = await cookies();
    const isLoggedIn = cookieStore.has('auth_token');

    const nav = <>
        <li>
            <NavLink href={"/"}>Home</NavLink>
        </li>
         <li>
            <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
            <NavLink href={"/services"}>Service</NavLink>
        </li>
        <li>
            <NavLink href={"/experts"}>Experts</NavLink>
        </li>
        <li>
            <NavLink href={"/contact"}>Contact</NavLink>
        </li>
    </>

    return (
        <div className="navbar bg-base-100 backdrop-blur-md sticky top-0 z-50 border-b border-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 
                        rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {nav}
                    </ul>
                </div>
                <div className="-mt-4">
                    <Logo></Logo>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{nav}</ul>
            </div>
            <div className="navbar-end space-x-4">
                <Link href={"/services"} className='btn btn-primary'>
                    Book Now
                </Link>

                {/* Conditional Logic: Show Logout if logged in, else show Login */}
                {isLoggedIn ? (
                    <form action={logoutAction}>
                        <button type="submit" className='btn btn-outline btn-error'>
                            Logout
                        </button>
                    </form>
                ) : (
                    <Link href={"/login"}>
                        <button className='btn btn-outline btn-primary'>Login</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;