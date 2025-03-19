import { minify } from "@zokki/astro-minify";
import compress from "astro-compressor";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
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
