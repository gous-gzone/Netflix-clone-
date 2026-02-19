import { useRef } from 'react';
import MovieCard from './MovieCard';

export default function MovieRow({ title, movies, onPlay }) {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="mb-8 sm:mb-10">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 mb-4">
        <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto overflow-y-hidden scroll-smooth px-4 sm:px-6 md:px-8 lg:px-12 pb-4
          scrollbar-thin scrollbar-thumb-netflix-gray-dark scrollbar-track-transparent
          [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-thumb]:bg-netflix-gray-dark"
      >
        {movies.map((movie, i) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.image}
            gradient={movie.gradient}
            index={i}
            onPlay={onPlay}
          />
        ))}
      </div>
    </section>
  );
}
