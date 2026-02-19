# MongoDB Atlas - Fix "IP not whitelisted" Error

If you see: **"Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted."**

Follow these steps:

## 1. Log in to MongoDB Atlas

Go to [https://cloud.mongodb.com](https://cloud.mongodb.com) and sign in.

## 2. Open Network Access

1. Select your **project**
2. Click **Network Access** in the left sidebar (under Security)

## 3. Add Your IP Address

1. Click **"Add IP Address"**
2. Choose one of:
   - **"Add Current IP Address"** – adds your current IP (recommended for dev)
   - **"Allow Access from Anywhere"** – add `0.0.0.0/0` (allows any IP, useful for development or changing networks)

3. Click **Confirm**

## 4. Allow a few minutes

Changes can take 1–2 minutes to apply. Then restart your server:

```bash
cd server
npm run dev
```

---

## For production (Render, etc.)

Use **Allow Access from Anywhere** (`0.0.0.0/0`) so your deployed backend can connect from Render’s IPs.
