import { useState, useEffect, useRef } from 'react';
import { searchMovies } from '../data/movies';
import MovieCard from './MovieCard';
import DashboardNavbar from './DashboardNavbar';

export default function SearchPage({ onPlay, isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (query.trim().length >= 2) {
      setResults(searchMovies(query));
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-netflix-black">
      <DashboardNavbar showSearchButton={false} />
      <button
        onClick={onClose}
        className="fixed top-5 right-28 sm:right-36 z-50 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors flex items-center justify-center"
        aria-label="Close search"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="pt-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl">
          <div className="relative flex items-center bg-netflix-gray-dark/90 rounded-md overflow-hidden mb-8">
            <svg
              className="absolute left-4 w-6 h-6 text-netflix-gray"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for movies, shows..."
              className="w-full pl-14 pr-14 py-4 bg-transparent text-white placeholder-netflix-gray outline-none text-lg"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 p-2 rounded-full hover:bg-white/20 text-netflix-gray hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Results - Netflix poster grid */}
          <div className="min-h-[50vh]">
            {query.trim().length < 2 ? (
              <div className="text-center py-20">
                <p className="text-netflix-gray text-lg mb-2">Search for movies, series, and more</p>
                <p className="text-netflix-gray/70 text-sm">Start typing to find titles</p>
              </div>
            ) : results.length > 0 ? (
              <>
                <p className="text-netflix-gray text-sm mb-6">
                  {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
                  {results.map((movie, i) => (
                    <MovieCard
                      key={movie.id}
                      title={movie.title}
                      image={movie.image}
                      gradient={movie.gradient}
                      index={i}
                      onPlay={() => onPlay(movie)}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-netflix-gray text-lg">No titles found for "{query}"</p>
                <p className="text-netflix-gray/70 text-sm mt-2">Try different keywords</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
