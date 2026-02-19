import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getErrorMessage } from '../services/api';
import AuthLayout from '../components/AuthLayout';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, loading: authLoading, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  useEffect(() => {
    if (!authLoading && user) navigate(from, { replace: true });
  }, [user, authLoading, navigate, from]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(getErrorMessage(err, 'Failed to sign in'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Sign In">
      <form onSubmit={handleSubmit}>
        {error && (
          <div
            className="mb-4 sm:mb-5 p-3 sm:p-4 bg-red-500/15 border border-red-500/40 rounded-lg text-red-400 text-sm flex items-center gap-2 animate-auth-fade-in"
            role="alert"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showPasswordToggle
          required
        />
        <Button type="submit" loading={loading}>
          Sign In
        </Button>
      </form>
      <p className="mt-6 sm:mt-8 text-center text-netflix-gray text-sm sm:text-base">
        New to Netflix?{' '}
        <Link
          to="/register"
          className="text-white font-medium hover:underline transition-opacity hover:opacity-90"
        >
          Sign up now
        </Link>
      </p>
    </AuthLayout>
  );
}
