# Deploy to Vercel - Single Folder Structure

## ✅ Everything is now in ONE folder!

### Structure:
```
netflix/
├── src/
│   ├── api/          # Backend (Express)
│   └── client/       # Frontend (React)
├── public/
├── index.html
├── package.json      # All dependencies
├── vite.config.js
└── .env
```

## Deploy Steps:

### 1. Install Dependencies
```bash
npm install
```

### 2. Update .env
```bash
# Add your MongoDB URI and JWT secret
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/netflix-auth
JWT_SECRET=your-secret-key
```

### 3. Test Locally
```bash
# Terminal 1 - Run backend
npm run server

# Terminal 2 - Run frontend
npm run dev
```

### 4. Deploy to Vercel
```bash
# Push to GitHub
git add .
git commit -m "Single folder structure"
git push

# Go to vercel.com
# Import repository
# Add environment variables:
#   - MONGO_URI
#   - JWT_SECRET
#   - NODE_ENV=production
#   - VITE_API_URL=/api
# Deploy!
```

## Done! 🚀

Your app is now in a single folder and ready for Vercel deployment.
