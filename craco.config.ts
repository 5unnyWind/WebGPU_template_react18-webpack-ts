//craco.config.ts

import path from 'path'
module.exports = {
    webpack: {
        alias: {
            "@/src": path.resolve(__dirname, "src/"),
            "@/components": path.resolve(__dirname, "src/components/"),
            "@/hooks": path.resolve(__dirname, "src/hooks/"),
            "@/wgsl": path.resolve(__dirname, "src/wgsl/")
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