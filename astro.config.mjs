import { defineConfig } from 'astro/config';
import { minify } from '@zokki/astro-minify';
import compress from 'astro-compressor';

// https://astro.build/config
export default defineConfig({	integrations: [minify({logAllFiles: false}),compress({gzip: true, brotli: false})] });
