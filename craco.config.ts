//craco.config.ts

import path from 'path'
module.exports = {
    webpack: {
        alias: {
            "@/components": path.resolve(__dirname, "src/components/"),
            "@/hooks": path.resolve(__dirname, "src/hooks/"),
            "@/shaders": path.resolve(__dirname, "src/shaders/")
        },
        configure: {
            module: {
                rules: [
                    { test: /\.wgsl$/, type: "asset/source" }
                ],
            }
        }
    }
}