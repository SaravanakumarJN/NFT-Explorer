/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "three-dots": {
          "0%, 100%": {
            transform: " scale(0%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "scale(1)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        running: "shine-lines 1s linear infinite",
        blink: "1s blink step-end infinite",
        "three-dots-first": "three-dots 1.4s infinite 0s",
        "three-dots-two": "three-dots 1.4s infinite 0.1s",
        "three-dots-three": "three-dots 1.4s infinite 0.2s",
        "ping-once": "ping 1s cubic-bezier(0, 0, 0.2, 1) 1",
        "slide-up": "slide-up 300ms ease-in",
        "fade-out": "fade-out 6s infinite 0s",
        "fade-out-quick": "fade-out 1s",
      },
    },
  },
  plugins: [],
};
