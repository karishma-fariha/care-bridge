import AllServices from '@/components/home/AllServices';
import React from 'react';

export const metadata = {
  title: "All Services | CareBridge",
  description: "Browse our professional caregiving services.",
};

// Next.js 15+ requires searchParams to be treated as a Promise
const page = async ({ searchParams }) => {
    // Await it here to ensure data is ready for the child component
    const resolvedParams = await searchParams;

    return (
        <main>
            <AllServices searchParams={resolvedParams} />
        </main>
    );
};

export default page;