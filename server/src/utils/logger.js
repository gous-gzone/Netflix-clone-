const isProd = process.env.NODE_ENV === 'production';

export const logger = {
  info: (message, meta = {}) => {
    console.log(JSON.stringify({ level: 'info', message, ...meta, timestamp: new Date().toISOString() }));
  },
  error: (message, error = {}) => {
    console.error(JSON.stringify({ 
      level: 'error', 
      message, 
      error: error.message, 
      ...((!isProd && error.stack) && { stack: error.stack }),
      timestamp: new Date().toISOString() 
    }));
  },
  warn: (message, meta = {}) => {
    console.warn(JSON.stringify({ level: 'warn', message, ...meta, timestamp: new Date().toISOString() }));
  }
};
