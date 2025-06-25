/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"]
      },
      backgroundImage: {
        mobile: `url("/background-mobile.png")`,
        desktop: `url("/background-desktop.png")`,
        tablet: `url("/background-tablet.png")`,
        lines: `url("/pattern-lines.svg")`,
        ticket: `url("/pattern-ticket.svg")`
      }
    },
  },
  plugins: [],
}