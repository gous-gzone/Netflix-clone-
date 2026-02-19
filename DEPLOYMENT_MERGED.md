# Deployment Guide - Merged Structure

## Deploy to Vercel (Single Deployment)

### 1. Push to GitHub

```bash
git add .
git commit -m "Merge server and client"
git push
```

### 2. Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. **Import Project** → Select your repository
3. **Root Directory:** Leave as `.` (root)
4. Click **Deploy**

### 3. Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

| Key | Value |
|-----|-------|
| `MONGO_URI` | `mongodb+srv://user:pass@cluster.mongodb.net/netflix-auth` |
| `JWT_SECRET` | Strong random string |
| `NODE_ENV` | `production` |

### 4. Done! ✅

Your app will be live at `https://your-project.vercel.app`

---

## Local Development

```bash
# Install all dependencies
npm run install-all

# Copy environment files
cp .env.example .env
cp client/.env.example client/.env

# Edit .env with your MongoDB URI and JWT_SECRET
# Edit client/.env (use VITE_API_URL=/api)

# Run server (terminal 1)
npm run dev

# Run client (terminal 2)
cd client && npm run dev
```

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

---

## How It Works

- **Development:** Client proxies `/api` to `localhost:5000`
- **Production:** Server serves React build + API routes
- **Vercel:** Handles both frontend and backend in one deployment
