import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 替换 'REPO_NAME' 为你的 GitHub 仓库名，例如 '/chinese-typing-app/'
  // 如果你是部署到 username.github.io 根目录，则不需要这行或设为 '/'
  base: '/chinese-typing-app/', 
})
