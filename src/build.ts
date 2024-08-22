import dts from "bun-plugin-dts";

await Bun.build({
        entrypoints: [
            './src/index.ts',
            './src/routing.ts',
            './src/services.ts',
            './src/templates.ts',
            './src/hyperscript.ts',
        ],
        outdir: './dist',
        target: 'bun',
        plugins: [dts()],
        splitting: true,
        //sourcemap: 'inline',
        //minify: true,
    }
)