import * as esbuild from "esbuild";

await esbuild.build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    sourcemap: true,
    outdir: "build",
    logLevel: "debug",
    format: "esm",
    splitting: true,
    keepNames: true,
    outExtension: {
        ".js": ".min.mjs",
        ".css": ".min.css",
    },
    minify: true,
});
