<template lang="">
    <div>
        <TicketSummary
            :month="ticketData.month"
            :purchaseAmount="ticketData.purchaseAmount"
            :usedAmount="ticketData.usedAmount"
            :remainingCount="ticketData.remainingCount"
        />
        <TicketHistoryList
            :history="ticketData.history"
        />
    </div>
</template>
<script>
import TicketSummary from './ticket/TicketSummary.vue';
import TicketHistoryList from './ticket/TicketHistoryList.vue';

export default {
    components: {
        TicketSummary,
        TicketHistoryList
    },
    data() {
        return {
        ticketData: {
            month: '6', // Example month
            purchaseAmount: '72,000', // Example purchase amount
            usedAmount: '64,000', // Example used amount
            remainingCount: '1', // Example remaining tickets
            history: [
                { date: '오늘', price: '-8,000', storeName: '인쌩맥주', time: '14:00' },
                { date: '23일 월요일', price: '-8,000', storeName: '인쌩맥주', time: '14:00' },
                { date: '20일 금요일', price: '-8,000', storeName: '인쌩맥주', time: '14:00' },
                { date: '20일 금요일', price: '-8,000', storeName: '인쌩맥주', time: '14:00' }
                ]
            }
        }
    }
    
}
</script>
<style lang="">
    
</style>