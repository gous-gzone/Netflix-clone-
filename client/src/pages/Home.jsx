import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (user) {
        navigate('/dashboard', { replace: true });
      }
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-netflix-black flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-netflix-red/50" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-netflix-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240225-popsignuptwoweeks-perspective_alpha_website_small.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-hero-pattern" />

      <header className="relative z-10 flex items-center justify-between px-8 py-6">
        <span className="text-netflix-red font-display text-4xl tracking-tight">NETFLIX</span>
        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 text-white hover:underline font-medium"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-netflix-red hover:bg-netflix-red-dark rounded font-semibold transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 max-w-4xl">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
          Watch anywhere. Cancel anytime.
        </p>
        <Link
          to="/register"
          className="px-8 py-4 bg-netflix-red hover:bg-netflix-red-dark rounded text-xl font-semibold transition-colors"
        >
          Get Started
        </Link>
      </main>
    </div>
  );
}
