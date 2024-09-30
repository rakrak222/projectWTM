<template lang="">
  <div>
    <section class="rounded-lg bg-white p-4 shadow-md">
  <h1 class="mb-4 text-lg font-bold">사용 상세 내역</h1>
  <div>
    <div class="mb-2 text-sm text-gray-500">{{date}}</div>
    <div class="flex items-center p-2">
      <div class="flex items-center space-x-2">
        <img src="/svg/fork_knife.svg" alt="icon" class="h-4 w-4" />
      </div>
      <div class="ml-2">
        <div class="text-lg font-semibold text-gray-700">{{price}}원</div>
        <div class="text-sm text-gray-500">{{storeName}}</div>
      </div>
    <div class="ml-auto text-sm text-gray-400">{{time}}</div>
    </div>
  </div>
</section>

  </div>
</template>
<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    },
    amount: {
      type: String,
      required: true
    },
    storeName: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="">
  
</style>