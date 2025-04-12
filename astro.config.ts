import { minify } from "@zokki/astro-minify";
import compress from "astro-compressor";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	vite: {
    plugins: [tailwindcss()],
  },
	integrations: [
		minify({ logAllFiles: false }),
		compress({
			brotli: true,
			fileExtensions: [
				".css",
				".js",
				".html",
				".xml",
				".svg",
				".jpg",
				".txt",
			],
		}),
	],
});
