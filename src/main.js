import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PdfViewer from './components/PdfViewer.vue'
import '@/styles/index.css';
import 'virtual:windi.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/inquerito_do_fim_do_mundo_o_apagar_das_luzes_do_direito_brasileiro', component: PdfViewer }
  ]
})

createApp(App).use(router).mount('#app')