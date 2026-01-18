"use server";

import { dbConnect,collections } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";


export const getServices = async() =>{
 const services = await (dbConnect(collections.PRODUCTS)).find().toArray();
 return services;
}

export const getSingleProduct = async (id) => {
    if (!id || id.length !== 24) return null; 
    
    const collection = await dbConnect(collections.PRODUCTS);
    const query = { _id: new ObjectId(id) };
    return await collection.findOne(query);
}

export const getFeaturedServices = async () => {
    try {
        // 1. Connect to the collection
        const collection = await dbConnect(collections.PRODUCTS);
        
        // 2. Fetch only 3 items using .limit()
        const services = await collection.find().limit(4).toArray();
        
        return services;
    } catch (error) {
        console.error("Error fetching featured services:", error);
        return [];
    }
}