# Deployment Guide

## Backend (Render)

### 1. Push to GitHub

Ensure your `server` folder (or monorepo) is in a Git repository.

### 2. Create Render Web Service

1. Go to [Render Dashboard](https://dashboard.render.com)
2. **New** → **Web Service**
3. Connect your repo
4. Configure:
   - **Root Directory:** `server` (if in monorepo) or leave blank
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`

### 3. Environment Variables (Render)

Add these in **Environment** → **Environment Variables**:

| Key | Value |
|-----|-------|
| `MONGO_URI` | `mongodb+srv://user:pass@cluster.mongodb.net/netflix-auth?retryWrites=true&w=majority` |
| `JWT_SECRET` | Strong random string (e.g. `openssl rand -base64 32`) |
| `NODE_ENV` | `production` |
| `FRONTEND_URL` | Your Vercel URL, e.g. `https://your-app.vercel.app` |

### 4. MongoDB Atlas

1. **Network Access:** Add `0.0.0.0/0` (Allow from anywhere) for cloud deployment
2. **Database User:** Ensure user has read/write access
3. Connection string works from Render; no IP whitelist needed with 0.0.0.0/0

---

## Frontend (Vercel)

### 1. Deploy

1. Go to [Vercel](https://vercel.com)
2. **Add New** → **Project** → Import your repo
3. Configure:
   - **Root Directory:** `client`
   - **Framework Preset:** Vite (auto-detected)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

### 2. Environment Variables (Vercel)

| Key | Value |
|-----|-------|
| `VITE_API_URL` | `https://your-render-service.onrender.com/api` |

### 3. SPA Routing

`vercel.json` is configured so React Router routes work (all paths redirect to `index.html`).

---

## Summary

- **Backend:** Render uses `process.env.PORT` (set automatically)
- **Frontend:** Build with `npm run build`, served from `dist`
- **MongoDB Atlas:** Use `0.0.0.0/0` in Network Access for cloud hosts
- **CORS:** Set `FRONTEND_URL` on Render to your Vercel URL
