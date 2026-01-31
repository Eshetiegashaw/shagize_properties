import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import proxyOptions from "./proxyOptions";
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		port: 8080,
		proxy: proxyOptions,
	},
	// resolve: {
	// 	alias: {
	// 		"@": path.resolve(__dirname, "./src"),
	// 	},
	// },
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		outDir: "../real_estate/public/real_estate_app",
		emptyOutDir: true,
		target: "es2015",
	},
});
