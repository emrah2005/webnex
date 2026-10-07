export default function manifest() {
  return {
    name: "WebNex",
    short_name: "WebNex",
    description:
      "WebNex builds modern websites, web applications and digital experiences designed to help businesses grow online.",
    start_url: "/",
    display: "standalone",
    background_color: "#05080F",
    theme_color: "#05080F",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
