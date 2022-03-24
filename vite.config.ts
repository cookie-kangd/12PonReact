// vite基本配置
import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx']
    }),
    WindiCSS()
  ], // 配置需要使用的插件列表，这里将vue添加进去
  // 配置文件别名 vite1.0是/@/  2.0改为/@
  // 这里是将src目录配置别名为 /@ 方便在项目中导入src目录下的文件
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.less', '.scss', '.sass'],
    alias: [
      { find: /^~/, replacement: '' },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      }
    ]
  },
  // 强制预构建插件包
  optimizeDeps: {
    include: ['axios']
  },
  // 打包配置
  build: {
    target: 'modules',
    outDir: 'dist', //指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    minify: 'terser', // 混淆器，terser构建后文件体积更小   react使用terser,vue或其他使用默认
    sourcemap: false,
    cssCodeSplit: true,
    brotliSize: false,
    chunkSizeWarningLimit: 1500
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    },
    postcss: {
      plugins: [
        require('cssnano')({}),
        require('autoprefixer')({
          grid: true
        })
      ]
    }
  },
  // 本地运行配置，及反向代理配置
  server: {
    port: 3000,
    cors: true, // 默认启用并允许任何源
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
    proxy: {
      '/api': {
        target: 'https://www.mxnzp.com/api', //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
