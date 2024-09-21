import { normalizePath } from 'vite'
import { resolve } from 'path'

export default defineNuxtConfig({
    alias: {
        '~layer': normalizePath(resolve(__dirname, './'))
    },
    extends: [
        '~layer/components'
    ],
    ssr: true,
    dir: {
        pages: '-disabled-',
    },
    plugins: [
    ],
    devtools: {
        enabled: true
    },
    imports: {
        autoImport: true,
    },
    runtimeConfig: {
    },
    experimental: {
        renderJsonPayloads: false,
    },
    typescript: {
        includeWorkspace: true
    },
    future: {
        typescriptBundlerResolution: false,
    },
    vite: {
        build: {
            target: 'es2020',
        },
    },
    hooks: {
        'prepare:types'() {
        },
    }
})