"use server";
import { dbConnect, collections } from "@/lib/dbConnect";

export const getCaregivers = async (page = 1, limit = 8) => {
    try {
        const collection = await dbConnect(collections.CAREGIVERS);
        
        // Calculate how many items to skip
        const skip = (page - 1) * limit;

        const caregivers = await collection.find()
            .skip(skip)
            .limit(limit)
            .toArray();

        // Get total count for pagination UI
        const totalCount = await collection.countDocuments();
        const totalPages = Math.ceil(totalCount / limit);

        return { 
            caregivers, 
            totalPages, 
            currentPage: page 
        };
    } catch (error) {
        console.error("Error fetching caregivers:", error);
        return { caregivers: [], totalPages: 0, currentPage: 1 };
    }
}