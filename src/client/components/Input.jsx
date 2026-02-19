import { useState } from 'react';

export default function Input({
  label,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  showPasswordToggle = false,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);
  const isFloating = focused || value;
  const inputType = showPasswordToggle && type === 'password'
    ? (showPassword ? 'text' : 'password')
    : type;

  return (
    <div className="mb-4 sm:mb-5">
      <div className="relative group">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          className={`
            w-full px-4 py-3 sm:py-3.5 ${showPasswordToggle && type === 'password' ? 'pr-12' : ''}
            bg-netflix-gray-dark/60 rounded
            text-white text-base
            border outline-none transition-all duration-200
            placeholder-transparent peer
            hover:bg-netflix-gray-dark/80 focus:bg-netflix-gray-dark
            ${error
              ? 'border-red-500 focus:border-red-500'
              : 'border-white/20 focus:border-netflix-red hover:border-white/30'
            }
          `}
          placeholder=" "
        />

        {/* Floating label */}
        <label
          className={`
            absolute left-4 transition-all duration-200 ease-out pointer-events-none
            ${isFloating
              ? 'top-0 -translate-y-full text-xs text-netflix-gray mt-0.5'
              : 'top-1/2 -translate-y-1/2 text-base text-netflix-gray'
            }
          `}
        >
          {label}
          {required && <span className="text-red-400 ml-0.5">*</span>}
        </label>

        {/* Password show/hide toggle */}
        {showPasswordToggle && type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded
              text-netflix-gray hover:text-white hover:bg-white/10
              transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-netflix-red focus:ring-inset"
            tabIndex={-1}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Error message below input */}
      {error && (
        <p className="mt-1.5 text-sm text-red-400 flex items-center gap-1" role="alert">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
