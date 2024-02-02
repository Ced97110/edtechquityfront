import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      "display":"var(--display-font)",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
         'custom-gradient': 'linear-gradient(to top, #2F7DD2, transparent 60%, transparent)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         'gradient-to-b': 'linear-gradient(to bottom, transparent 20%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0.4) 100%)',  
      },
      boxShadow:{
         'custom-normal': '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
        'custom-hover': '0 20px 30px -15px rgba(255, 255, 255, 0.7)'
      },
      transitionProperty:{
         'height-width': 'height, width',
      },
       transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      colors:{
        navy:'#111D4A',
        fuch:'#820263',
        ciel:'#2F7DD2',
        jaune:'#F3CE28'
      }
      
    },
  },
  plugins: [
     require("flowbite/plugin"),
  ],
}
export default config
