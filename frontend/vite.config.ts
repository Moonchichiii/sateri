import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// ESM-safe __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // Look for .env one level up (project root)
  envDir: "..",

  publicDir: "public",

  plugins: [
    react(),
    tailwindcss(),

    // Brotli compression for production assets
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 10_240,
      deleteOriginFile: false,
    }),

    // Gzip fallback
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 10_240,
      deleteOriginFile: false,
    }),

    // Basic image optimisation
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
      avif: { quality: 75 },
      // touch icons
      exclude: /favicon|apple-touch-icon/i,
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@i18n": path.resolve(__dirname, "./src/i18n"),
      "@layout": path.resolve(__dirname, "./src/layout"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },

  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
    legalComments: "none",
    drop:
      process.env.NODE_ENV === "production"
        ? ["console", "debugger"]
        : [],
  },

  server: {
    port: 5173,
    host: true,
    open: true,
  },

  preview: {
    port: 5173,
    host: true,
  },

  build: {
    target: "es2020",
    minify: "esbuild",
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 500,
    assetsDir: "assets",
    copyPublicDir: true,

    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react/jsx-runtime"],
          router: ["@tanstack/react-router"],
          query: ["@tanstack/react-query"],
        },
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },

    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "@tanstack/react-router",
      "@tanstack/react-query",
    ],
  },
});
