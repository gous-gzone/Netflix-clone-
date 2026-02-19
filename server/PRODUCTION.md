# Production Deployment Guide

## Environment Variables

Required for production:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/netflix-auth
JWT_SECRET=generate-strong-random-secret-min-32-chars
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://your-frontend-domain.com
```

## Security Checklist

- [x] Rate limiting on auth endpoints (5 req/hour register, 10 req/15min login)
- [x] Input validation and sanitization
- [x] Request body size limits (10kb)
- [x] CORS configured for production domain
- [x] Password hashing with bcrypt (12 rounds)
- [x] JWT token expiration (7 days)
- [x] Error handling middleware
- [x] Structured logging
- [x] Graceful shutdown handling
- [x] Trust proxy enabled for reverse proxies

## Production Features

1. **Rate Limiting**: Prevents brute force attacks
2. **Input Validation**: Email format, password length, required fields
3. **Error Handling**: Centralized error handler, no stack traces in production
4. **Logging**: JSON structured logs with timestamps
5. **Security Headers**: Body size limits, trust proxy
6. **Graceful Shutdown**: SIGTERM/SIGINT handlers

## Deploy to Render

1. Push code to GitHub
2. Create new Web Service on Render
3. Connect repository
4. Set environment variables
5. Deploy

## Health Check

`GET /api/health` returns server status and environment info.

## Monitoring

All logs are JSON formatted for easy parsing by log aggregators (CloudWatch, Datadog, etc).
