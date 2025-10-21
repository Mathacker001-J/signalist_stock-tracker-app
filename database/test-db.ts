// test-db.ts

import dotenv from 'dotenv';
import mongoose from 'mongoose';

// 1️⃣ Load environment variables
dotenv.config();

// 2️⃣ Check MongoDB URI
if (!process.env.MONGO_URI) {
    console.error('❌ ERROR: MONGO_URI must be set in .env');
    process.exit(1);
}

// TypeScript now knows mongoUri exists
const mongoUri: string = process.env.MONGO_URI;

// 3️⃣ Connect to MongoDB
async function main() {
    try {
        const startedAt = Date.now();

        await mongoose.connect(mongoUri, { bufferCommands: false });

        const elapsed = Date.now() - startedAt;
        const dbName = mongoose.connection?.name || '(unknown)';
        const host = mongoose.connection.host || '(unknown)';

        console.log(`✅ OK: Connected to MongoDB [db="${dbName}", host="${host}", time=${elapsed}ms]`);

        // Close connection
        await mongoose.connection.close();
        console.log('🔌 Connection closed.');
        process.exit(0);
    } catch (err) {
        console.error('❌ Connection error:', err);
        process.exit(1);
    }
}

main();
