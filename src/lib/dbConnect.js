import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbname = process.env.DBNAME;

export const collections = {
    SERVICES: "services",    // Renamed from PRODUCTS to SERVICES to match your usage
    CAREGIVERS: "caregivers",
};

// Create a singleton client to prevent opening too many connections in dev mode
let client;

if (!client) {
    client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
}

export const dbConnect = (cname) => {
    // Safety check: Ensure the collection name exists
    if (!cname) {
        console.error("CRITICAL: dbConnect called with undefined collection name!");
        return null; 
    }
    return client.db(dbname).collection(cname);
};