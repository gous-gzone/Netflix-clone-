/**
 * Test MongoDB connection: node scripts/test-connection.js
 */
import 'dotenv/config';
import dns from 'dns';

// Use Google DNS (fixes resolution when system DNS fails)
dns.setServers(['8.8.8.8', '8.8.4.4']);

import mongoose from 'mongoose';

const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGO_URI not found in .env');
  process.exit(1);
}

console.log('Connecting to MongoDB (using Google DNS)...');

mongoose
  .connect(uri, { serverSelectionTimeoutMS: 20000 })
  .then((conn) => {
    console.log('\nSUCCESS! MongoDB Connected:', conn.connection.host);
    process.exit(0);
  })
  .catch((err) => {
    console.error('\nFAILED:', err.message);
    if (err.message.includes('whitelist')) {
      console.error('\n>>> Add 0.0.0.0/0 in Atlas Network Access (correct project)');
    }
    process.exit(1);
  });
