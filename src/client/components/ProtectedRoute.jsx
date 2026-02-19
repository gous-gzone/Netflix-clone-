import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Protects routes by validating JWT via AuthContext.
 * AuthContext calls GET /api/auth/me with Bearer token on load;
 * backend validates JWT and returns user or 401.
 * No valid user = redirect to /login.
 */
export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-netflix-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full border-4 border-netflix-red/30 border-t-netflix-red animate-spin" />
          <p className="text-netflix-gray">Validating session...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
