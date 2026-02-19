import { useState } from 'react';

export default function MovieCard({ title, image, gradient, index = 0, onPlay }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const showImage = image && !error;

  const handlePlay = (e) => {
    e.stopPropagation();
    if (onPlay) onPlay({ title });
    else window.alert(`Play: ${title}`);
  };

  return (
    <div
      className="group relative aspect-[2/3] rounded overflow-hidden cursor-pointer flex-shrink-0
        transition-all duration-300 ease-out
        hover:scale-110 hover:z-20 hover:shadow-2xl hover:shadow-black/90
        focus-within:scale-110 focus-within:z-20
        min-w-[140px] sm:min-w-[160px] md:min-w-[180px]"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      {/* Poster / background */}
      <div className="absolute inset-0 bg-netflix-gray-dark">
        {showImage && (
          <>
            <img
              src={image}
              alt={title}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              onError={() => setError(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                loaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {!loaded && !error && (
              <div className="absolute inset-0 bg-netflix-gray-dark animate-pulse" />
            )}
          </>
        )}
        {(!image || error) && (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient || 'from-netflix-red/40'} via-netflix-gray-dark to-netflix-black`}
          />
        )}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4">
        <h3 className="text-white font-semibold text-sm sm:text-base truncate drop-shadow-lg">
          {title}
        </h3>
      </div>

      {/* Play button - visible on hover */}
      <div
        className="absolute inset-0 flex items-center justify-center
          opacity-0 group-hover:opacity-100 transition-opacity duration-200
          bg-black/40"
      >
        <button
          onClick={handlePlay}
          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full
            bg-netflix-red hover:bg-netflix-red-dark
            text-white shadow-xl
            transition-transform hover:scale-110 active:scale-95
            focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          aria-label={`Play ${title}`}
        >
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
