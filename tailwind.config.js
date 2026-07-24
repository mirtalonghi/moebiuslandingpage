/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Mobile-first screen sizes
      screens: {
        'mobile': '375px', // Standard mobile (iPhone)
        'mobile-lg': '430px', // Large mobile (iPhone Pro Max)
        'sm': '640px',     // Small tablets  
        'md': '768px',     // Tablets
        'lg': '1024px',    // Desktop
        'xl': '1280px',    // Large desktop
        '2xl': '1536px',   // Extra large desktop
      },
      // Mobile-optimized spacing
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      // Touch-friendly sizes
      minHeight: {
        'touch': '44px',
        'dvh': '100dvh',
        'screen-safe': 'calc(100dvh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
      },
      minWidth: {
        'touch': '44px',
      },
      // Container heights for single-screen layouts
      height: {
        'dvh': '100dvh',
        'touch': '44px',
        'screen': '100vh',
        'screen-dvh': '100dvh',
        'screen-safe': 'calc(100dvh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
        'container-full': 'calc(100dvh - env(safe-area-inset-top))',
        'content-area': 'calc(100dvh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 4rem)',
      },
      // Mobile viewport max widths
      maxWidth: {
        'mobile': '375px',    // Standard mobile container
        'mobile-lg': '430px', // Large mobile container
        'mobile-full': '100vw', // Full mobile width
      },
      // Container and scrollable areas
      maxHeight: {
        'screen-safe': 'calc(100dvh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
        'container-full': 'calc(100dvh - env(safe-area-inset-top))',
        'content-area': 'calc(100dvh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 4rem)',
      },
    },
  },
  plugins: [],
}