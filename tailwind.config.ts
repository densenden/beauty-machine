import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#450014', // Dark Bordeaux
        'primary-light': '#6B0B2A', // Lighter bordeaux for better contrast
        accent: '#FF4FB1',  // Elegant Pink
        'accent-light': '#FF7BC7', // Lighter pink
        background: '#FFFFFF',
        foreground: '#1A1A1A', // Darker text for better contrast
        'text-secondary': '#4A4A4A', // Better contrast for secondary text
        'text-muted': '#6B7280', // Refined muted text
      },
      fontFamily: {
        'lexend': ['var(--font-lexend)', 'system-ui', 'sans-serif'],
        'lexend-giga': ['var(--font-lexend-giga)', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'thin': '100',
        'light': '300',
        'regular': '400',
        'medium': '500',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      backdropBlur: {
        '3xl': '64px',
      },
      borderRadius: {
        'elegant': '0.75rem',
        'soft': '1.5rem',
      },
      boxShadow: {
        'elegant': '0 8px 32px rgba(69, 0, 20, 0.1)',
        'accent': '0 4px 20px rgba(255, 79, 177, 0.15)',
        'glass': '0 8px 32px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}

export default config 