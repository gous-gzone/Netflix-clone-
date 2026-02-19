import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import DashboardNavbar from '../components/DashboardNavbar';
import MovieRow from '../components/MovieRow';
import SearchPage from '../components/SearchPage';
import {
  popularMovies,
  trendingNow,
  movies,
  drama,
  comedy,
  hollywood,
  bollywood,
  myList,
} from '../data/movies';

export default function Dashboard() {
  const { user } = useAuth();
  const [playing, setPlaying] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const handlePlay = (movie) => {
    setPlaying(movie);
    setSearchOpen(false);
    setTimeout(() => setPlaying(null), 2000);
  };

  return (
    <div className="min-h-screen bg-netflix-black">
      <DashboardNavbar onSearchOpen={() => setSearchOpen(true)} />

      {/* Search page - Netflix style full-screen with poster interface */}
      <SearchPage
        isOpen={searchOpen}
        onPlay={handlePlay}
        onClose={() => setSearchOpen(false)}
      />

      {/* Main content - hide when search is open */}
      {!searchOpen && (
        <>
          {/* Hero banner - Netflix web series poster style */}
          <section className="relative pt-16 sm:pt-[68px] min-h-[45vh] sm:min-h-[55vh] flex flex-col justify-end">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240225-popsignuptwoweeks-perspective_alpha_website_small.jpg)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/50 to-transparent" />

            <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 pb-12 sm:pb-16 md:pb-20">
              <div className="max-w-3xl">
                <p className="text-netflix-red font-semibold text-sm sm:text-base mb-2">
                  WELCOME BACK
                </p>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-4">
                  {user?.name}
                </h1>
                <p className="text-lg sm:text-xl text-white/90 max-w-xl">
                  Continue watching. Your favorites are waiting.
                </p>
              </div>
            </div>
          </section>

          {/* Movie rows - Netflix browse layout */}
          <main className="relative z-10 -mt-6 sm:-mt-10 pb-16">
            <MovieRow title="Popular on Netflix" movies={popularMovies} onPlay={handlePlay} />
            <MovieRow title="Trending Now" movies={trendingNow} onPlay={handlePlay} />
            <MovieRow title="Hollywood" movies={hollywood} onPlay={handlePlay} />
            <MovieRow title="Bollywood" movies={bollywood} onPlay={handlePlay} />
            <MovieRow title="Movies" movies={movies} onPlay={handlePlay} />
            <MovieRow title="Drama" movies={drama} onPlay={handlePlay} />
            <MovieRow title="Comedy" movies={comedy} onPlay={handlePlay} />
            <MovieRow title="My List" movies={myList} onPlay={handlePlay} />
          </main>
        </>
      )}

      {/* Toast when play is clicked */}
      {playing && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-netflix-red rounded-lg shadow-xl animate-fade flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          <span>Playing: {playing.title}</span>
        </div>
      )}
    </div>
  );
}
