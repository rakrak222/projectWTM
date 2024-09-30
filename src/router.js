// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import bookMarkPage from './layouts/bookMark.vue';
import TicketHistoryPage from './layouts/TicketHistory.vue';

// 라우터 설정
const routes = [
  { path: '/bookMark', component: bookMarkPage },
  { path: '/TicketHistory', component: TicketHistoryPage }
];

// Vue 3용 라우터 생성
const router = createRouter({
  history: createWebHistory(),  // Vue 3용 히스토리 모드
  routes
});

export default router;



