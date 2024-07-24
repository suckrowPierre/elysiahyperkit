import dts from "bun-plugin-dts";

await Bun.build({
        entrypoints: ['./src/index.ts', './src/routing.ts'],
        outdir: './dist',
        target: 'node',
        plugins: [dts()],
        splitting: true,
        //minify: true,
    }
)