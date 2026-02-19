export default function Button({
  children,
  type = 'button',
  loading,
  disabled,
  variant = 'primary',
  className = '',
  ...props
}) {
  const base =
    'w-full py-3 sm:py-3.5 rounded font-semibold text-base transition-all duration-300 ease-out ' +
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ' +
    'active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-netflix-red focus:ring-offset-2 focus:ring-offset-black';

  const variants = {
    primary:
      'bg-gradient-to-r from-netflix-red via-netflix-red to-red-600 ' +
      'text-white shadow-lg shadow-netflix-red/25 ' +
      'hover:from-red-600 hover:via-netflix-red-dark hover:to-netflix-red-dark hover:shadow-netflix-red/30 hover:scale-[1.02]',
    outline:
      'border-2 border-netflix-gray text-white ' +
      'hover:border-white/60 hover:bg-white/5',
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
