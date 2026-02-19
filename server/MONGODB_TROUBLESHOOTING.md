# MongoDB Connection Troubleshooting

## Important: Network Access vs Database Access

| Section | Purpose |
|---------|---------|
| **Network Access** (left sidebar) | IP whitelist - WHO can connect |
| **Database Access** (left sidebar) | User permissions - WHAT they can do |

You must add your IP in **Network Access**, NOT Database Access.

---

## Step-by-Step (Verify Each)

1. Go to https://cloud.mongodb.com/
2. **Select the correct project** (top-left dropdown) - the one with cluster0
3. Left sidebar → click **"Network Access"** (under Security)
4. Click **"Add IP Address"** (green button)
5. In the popup, click **"ALLOW ACCESS FROM ANYWHERE"**
   - This adds `0.0.0.0/0`
6. Click **"Confirm"**
7. Wait until status shows **"Active"** (not "Pending") - can take 2-5 minutes
8. Ensure you're in the same **Organization** as your cluster

---

## Test with MongoDB Compass

1. Install [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Connection string (same as .env):
   ```
   mongodb://mohammedgousoddin1432_db_user:gous%402004@cluster0-shard-00-00.y0ckio8.mongodb.net:27017/authdb?ssl=true&authSource=admin
   ```
3. If Compass fails too → Network Access is the issue
4. If Compass works → issue may be in our app

---

## Your IP: 205.254.184.56

Alternatively, add this exact IP in Network Access instead of 0.0.0.0/0.
(Use "Add Current IP Address" if you're on the same network.)
