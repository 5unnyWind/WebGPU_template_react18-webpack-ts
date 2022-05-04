//craco.config.ts

import path from 'path'
module.exports = {
    webpack: {
        alias: {
            "@/components": path.resolve(__dirname, "src/components/"),
            "@/hooks": path.resolve(__dirname, "src/hooks/"),
            "@/shader": path.resolve(__dirname, "src/shader/")
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