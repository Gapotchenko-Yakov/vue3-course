<template>
<div class="app">
    <post-form />
    <post-list :posts="posts"/>
</div>
</template>
<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';

export default {
    components:{
        PostList, PostForm,
    },
    data(){
        return {
            posts: [
                {id: 1, title: 'Javascript', body: 'Описание поста'},
                {id: 2, title: 'Javascript', body: 'Описание поста 1'},
                {id: 3, title: 'Javascript', body: 'Описание поста 2'},
            ],
            title: '',
            body: '',
        }
    },
    methods: {
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;
}
</style>