import { useState, useRef, useEffect } from 'react';
import { searchMovies } from '../data/movies';
import MovieCard from './MovieCard';

export default function SearchBar({ onPlay, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (query.trim().length >= 2) {
      setResults(searchMovies(query));
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const showResults = focused && query.trim().length >= 2;

  return (
    <div className="relative flex-1 max-w-xl mx-4">
      <div className="relative flex items-center bg-netflix-gray-dark/90 rounded-md overflow-hidden">
        <svg
          className="absolute left-3 w-5 h-5 text-netflix-gray"
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
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
          placeholder="Search for movies, shows..."
          className="w-full pl-10 pr-10 py-2.5 bg-transparent text-white placeholder-netflix-gray outline-none text-sm sm:text-base"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 p-1 rounded-full hover:bg-white/20 text-netflix-gray hover:text-white"
            aria-label="Clear"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Search results overlay - Netflix style */}
      {showResults && (
        <div
          className="absolute top-full left-0 right-0 mt-2 rounded-lg overflow-hidden
            bg-netflix-black-light/98 backdrop-blur-xl border border-white/10
            max-h-[70vh] overflow-y-auto shadow-2xl z-50"
        >
          <div className="p-4">
            <p className="text-netflix-gray text-sm mb-4">
              {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
            </p>
            {results.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {results.map((movie, i) => (
                  <MovieCard
                    key={movie.id}
                    title={movie.title}
                    image={movie.image}
                    gradient={movie.gradient}
                    index={i}
                    onPlay={() => {
                      onPlay(movie);
                      setQuery('');
                      setFocused(false);
                      onClose?.();
                    }}
                  />
                ))}
              </div>
            ) : (
              <p className="text-netflix-gray py-8 text-center">No titles found. Try different keywords.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
