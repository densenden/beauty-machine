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
        accent: '#FF4FB1',  // Elegant Pink
        background: '#FFFFFF',
        foreground: '#000000',
      },
      fontFamily: {
        'geist': ['var(--font-geist)', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'thin': '100',
        'light': '300',
        'regular': '400',
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
    },
  },
  plugins: [],
}

export default config 