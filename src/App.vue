<template>
  <div id="app">
    <BookMark />
  </div>
</template>

<script>
// bookMark.vue 컴포넌트를 import합니다.
import BookMark from './layouts/bookMark.vue';

export default {
  name: 'App',
  components: {
    BookMark
  }
};
</script>

<style>
/* 필요에 따라 스타일을 추가하세요 */
</style>
