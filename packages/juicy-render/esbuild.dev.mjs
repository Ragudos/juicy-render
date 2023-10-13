import * as esBuild from "esbuild";

// bundle react app
const ctx = await esBuild.context({
    entryPoints: ["./src/index.html", "./src/index.ts"],
    loader: {
        ".html": "copy",
        ".svg": "file",
    },
    bundle: true,
    outdir: "dev",
    banner: {
        js: "(() => { (new EventSource(\"/esbuild\")).addEventListener('change', () => location.reload()); })();",
    },
    logLevel: "info",
    format: "esm",
    splitting: true,
    minify: true,
    keepNames: true,
});

// serve app to port @ localhost
await ctx
    .serve({
        servedir: "dev",
        port: 3000,
    })
    .then((v) => {
        console.log(`Server running on ${v.host}:${v.port}`);
    })
    .catch("Server error.");

// watch src dir for changes
await ctx.watch();
