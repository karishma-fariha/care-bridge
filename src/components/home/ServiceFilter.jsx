"use client"; // This is the magic line

import { useRouter, useSearchParams } from "next/navigation";

const ServiceFilter = ({ search, sort }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSortChange = (val) => {
        const params = new URLSearchParams(searchParams);
        if (val) {
            params.set("sort", val);
        } else {
            params.delete("sort");
        }
        params.set("page", "1"); // Reset to page 1 on sort
        router.push(`/services?${params.toString()}`);
    };

    return (
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-between items-center bg-base-200 p-6 rounded-3xl border border-base-300">
            {/* Search Form */}
            <form action="/services" className="flex w-full md:w-auto gap-2">
                <input 
                    name="search"
                    type="text" 
                    placeholder="Search service..." 
                    defaultValue={search}
                    className="input input-bordered w-full md:w-80 rounded-2xl focus:outline-primary"
                />
                <button type="submit" className="btn btn-primary rounded-2xl px-6">Search</button>
            </form>

            {/* Sort Dropdown */}
            <div className="flex gap-4 w-full md:w-auto">
                <select 
                    name="sort" 
                    onChange={(e) => handleSortChange(e.target.value)}
                    defaultValue={sort}
                    className="select select-bordered rounded-2xl w-full"
                >
                    <option value="">Sort By</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                </select>
            </div>
        </div>
    );
};

export default ServiceFilter;