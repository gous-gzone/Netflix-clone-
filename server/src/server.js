import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Serve React build in production
if (isProd) {
  const clientBuildPath = path.join(__dirname, '../../client/dist');
  app.use(express.static(clientBuildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
}

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
