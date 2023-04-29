export default {
  content: ["./*.{html,js,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./assets/bg.png')",
        "footer-texture": "url('./assets/bg1.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{ darkTheme: "emerald" }],
  },
};
