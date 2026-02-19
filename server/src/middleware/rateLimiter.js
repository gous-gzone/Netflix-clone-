const rateLimitStore = new Map();

export const rateLimiter = (options = {}) => {
  const { windowMs = 15 * 60 * 1000, max = 100 } = options;

  return (req, res, next) => {
    const key = req.ip;
    const now = Date.now();
    const record = rateLimitStore.get(key) || { count: 0, resetTime: now + windowMs };

    if (now > record.resetTime) {
      record.count = 0;
      record.resetTime = now + windowMs;
    }

    record.count++;
    rateLimitStore.set(key, record);

    if (record.count > max) {
      return res.status(429).json({ message: 'Too many requests, please try again later' });
    }

    next();
  };
};
