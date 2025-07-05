<template>
    <div class="page__wrapper">
        <div
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            class="page"
            :class="{
                'current-page': page === pageNumber,
            }"
            @click="changePage(pageNumber)"
        >
            {{ pageNumber }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'my-pagination',
    props:{
        totalPages:{
            type: Number,
        },
        page: {
            type: Number,
        }
    },
    methods:{
        changePage(pageNumber){
            this.$emit('update:page', pageNumber);
        },
    }
}
</script>
<style scoped>
    .page__wrapper {
        display: flex;
        justify-content: center;
        margin-top: 15px;
    }
    .page {
        border: 1px solid black;
        padding: 15px;
    }
    .current-page {
        border: 2px solid teal;
    }
</style>