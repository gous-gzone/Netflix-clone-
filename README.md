# Netflix-Inspired Authentication System

Full-stack authentication system with Netflix-style UI, JWT auth, and MongoDB Atlas.

## Tech Stack

**Frontend:** React (Vite), Tailwind CSS, Axios, React Router  
**Backend:** Node.js, Express.js, MongoDB Atlas, Mongoose, bcryptjs, jsonwebtoken

## Project Structure

```
netflix/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── services/
│   └── ...
├── server/          # Express backend
│   └── src/
│       ├── config/
│       ├── middleware/
│       ├── models/
│       └── routes/
└── README.md
```

## Setup

### 1. MongoDB Atlas

1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. **Network Access** → Add IP Address → **"Allow Access from Anywhere"** (`0.0.0.0/0`)
3. Get your connection string and replace `<username>` and `<password>`
4. See [MONGODB_ATLAS_SETUP.md](./MONGODB_ATLAS_SETUP.md) if you get "IP not whitelisted" error

### 2. Backend

```bash
cd server
cp .env.example .env
# Edit .env with your MONGODB_URI and JWT_SECRET
npm install
npm run dev
```

### 3. Frontend

```bash
cd client
cp .env.example .env
# VITE_API_URL=http://localhost:5000/api (default)
npm install
npm run dev
```

### 4. Access

- **Frontend:** http://localhost:3000  
- **Backend API:** http://localhost:5000  

## API Endpoints

| Method | Endpoint           | Description          |
|--------|--------------------|----------------------|
| POST   | /api/auth/register | Register new user    |
| POST   | /api/auth/login    | Login                |
| GET    | /api/auth/me       | Get current user (JWT) |

## Features

- Netflix-style modern UI with dark theme
- User registration and login
- JWT authentication (7-day expiry)
- Password hashing with bcrypt
- Protected dashboard route
- MongoDB Atlas cloud database

## Deployment

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for deploying to Render (backend) and Vercel (frontend).
