import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import viteSvgIcons from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        viteSvgIcons({
            // Specify the icon folder to be cached
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            // Specify symbolId format
            symbolId: 'icon-[dir]-[name]'
        })
    ],
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
    },
    css: {
        modules: {
            localsConvention: 'camelCaseOnly'
        },
        preprocessorOptions: {
            // styl: {
            //     imports: [path.resolve(process.cwd(), 'src/assets/stylus/lib/mixin.styl')]
            // },
            less: {
                javascriptEnabled: true,
                modifyVars: {
                    '@primary-color': '#1890ff'
                }
            }
        }
    }
})
