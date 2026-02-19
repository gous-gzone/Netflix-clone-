import { Link } from 'react-router-dom';

export default function AuthLayout({ children, title }) {
  return (
    <div className="min-h-screen min-w-full relative overflow-hidden">
      {/* Fullscreen background image - dark cinematic theme */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240225-popsignuptwoweeks-perspective_alpha_website_small.jpg)`,
        }}
      />
      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />

      {/* Red Netflix logo - top left */}
      <header className="relative z-20 px-4 sm:px-6 md:px-8 py-4 sm:py-5">
        <Link
          to="/"
          className="inline-block transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-netflix-red focus:ring-offset-2 focus:ring-offset-transparent rounded"
        >
          <span className="text-netflix-red font-display text-3xl sm:text-4xl tracking-tight drop-shadow-lg">
            NETFLIX
          </span>
        </Link>
      </header>

      {/* Centered glassmorphism card */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 py-8 sm:py-12 pb-24 min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)]">
        <div
          className="w-full max-w-[340px] sm:max-w-[400px] rounded-lg p-6 sm:p-8 md:p-10
            bg-black/70 backdrop-blur-xl backdrop-saturate-150
            border border-white/10 shadow-2xl shadow-black/50
            transition-all duration-300 hover:border-white/20 hover:shadow-netflix-red/5
            animate-auth-fade-in"
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white">
            {title}
          </h1>
          {children}
        </div>
      </main>
    </div>
  );
}
