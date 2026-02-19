import mongoose from 'mongoose';
import dns from 'dns';
import { logger } from '../utils/logger.js';

// Use Google DNS (fixes DNS resolution on some networks)
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGO_URI is not defined in environment variables');
    }
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    });
    logger.info('MongoDB Connected', { host: conn.connection.host });
  } catch (error) {
    logger.error('MongoDB connection error', error);
    if (error.message.includes('whitelist') || error.message.includes('IP')) {
      console.error('\n>>> FIX: Add your IP in MongoDB Atlas:');
      console.error('    1. Go to https://cloud.mongodb.com → Network Access');
      console.error('    2. Add IP Address → Allow Access from Anywhere (0.0.0.0/0)');
      console.error('    3. Confirm, wait 1-2 min, then restart server\n');
    }
    process.exit(1);
  }
};

export default connectDB;
