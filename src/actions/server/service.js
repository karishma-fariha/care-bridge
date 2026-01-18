"use server";

import { dbConnect,collections } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getServices = async (search = "", sort = "", page = 1, limit = 8) => {
    try {
        const collection = await dbConnect(collections.SERVICES);
        
        // console.log("Accessing collection:", collections.SERVICES); 

        const skip = (page - 1) * limit;

        let query = {};
        if (search) {
            query = { title: { $regex: search, $options: "i" } };
        }

        let sortOption = {};
        if (sort === "price-low") sortOption = { pricePerHour: 1 };
        if (sort === "price-high") sortOption = { pricePerHour: -1 };
        if (sort === "newest") sortOption = { _id: -1 };

        // Execute query
        const services = await collection
            .find(query) // This is where the error was triggered
            .sort(sortOption)
            .skip(skip)
            .limit(limit)
            .toArray();

        const totalCount = await collection.countDocuments(query);
        const totalPages = Math.ceil(totalCount / limit);

        return { 
            services: JSON.parse(JSON.stringify(services)), // Ensure plain objects for Next.js
            totalPages 
        };
    } catch (error) {
        console.error("MongoDB Error Details:", error);
        return { services: [], totalPages: 0 };
    }
}

export const getSingleProduct = async (id) => {
    if (!id || id.length !== 24) return null; 
    
    const collection = await dbConnect(collections.SERVICES);
    const query = { _id: new ObjectId(id) };
    return await collection.findOne(query);
}


export const getFeaturedServices = async () => {
    try {
        const collection = dbConnect(collections.SERVICES); 

        if (!collection) {
            console.error("Collection not found");
            return [];
        }

        const featuredServices = await collection.find().limit(4).toArray();
        
        return JSON.parse(JSON.stringify(featuredServices));
    } catch (error) {
        console.error("Error fetching featured services:", error);
        return [];
    }
}