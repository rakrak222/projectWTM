// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Vue 3 Router 가져오기
import '@/index.css';  // 전역 CSS 가져오기

const app = createApp(App);

// Vue 3에서 라우터 사용 설정
app.use(router);

// #app에 앱 마운트
app.mount('#app');
