/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://images.unsplash.com/photo-1589230612515-a3f8baabf102?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGxhZ29zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60')",
        "image":"url('/lagos.jpg')",
      },
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        "Abril":['Abril Fatface', "cursive"],
        "Almarai":['Almarai', "sans-serif"],
        "Kanit":['Kanit', "sans-serif"],
    },
    },
  },
  plugins: [],
}

