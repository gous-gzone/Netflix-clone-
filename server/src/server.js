import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const isProd = process.env.NODE_ENV === 'production';

const corsOptions = {
  origin: isProd && process.env.FRONTEND_URL
    ? process.env.FRONTEND_URL
    : true,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

function startServer(port) {
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port} (${isProd ? 'production' : 'development'})`);
  });
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      const nextPort = parseInt(port, 10) + 1;
      console.log(`Port ${port} in use, trying ${nextPort}...`);
      startServer(nextPort);
    } else {
      throw err;
    }
  });
}

startServer(PORT);
