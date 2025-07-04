<template>
<div class="app">
    <h1>Страница с постами</h1>
    <div class="app_btns">
    <my-button
        @click="showDialog"
    >
        Создать пост
    </my-button>
    <my-select
        v-model="selectedSort"
        :options="sortOptions"
    />
    </div>
    <my-dialog v-model:show="dialogVisible">
        <post-form
            @create="createPost"
        />
    </my-dialog>
    <post-list
        :posts="sortedPosts"
        @remove="removePost"
        v-if="!isPostsLoading"
    />
    <div v-else>
        Идет загрузка
    </div>
</div>
</template>
<script>
import axios from 'axios';
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';

export default {
    components:{
        PostList, PostForm,
    },
    data(){
        return {
            posts: [],
            dialogVisible: false,
            isPostsLoading: false,
            selectedSort: '',
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По содержанию'},
                {value: 'identifier', name: 'По идентификатору'},
            ]
        }
    },
    methods: {
        createPost(post){
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post){
            this.posts = this.posts.filter((p) => p.id !== post.id);
        },
        showDialog(){
            this.dialogVisible = true;
        },
        async fetchPosts(){
            try {
                this.isPostsLoading = true;
                setTimeout(async () => {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                        params:{
                            _limit: 5
                        }
                    });
                    this.posts = response.data;
                    this.isPostsLoading = false;
                }, 1000);
            } catch (e) {
                alert('Ошибка');
            }
        }
    },
    mounted(){
        this.fetchPosts();
    },
    computed:{
        sortedPosts(){
            return [...this.posts].sort((post1, post2) => {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
            })
        }
    },
    // watch:{
    //     selectedSort(newValue){
    //         this.posts.sort((post1, post2) => {
    //             return post1[newValue]?.localeCompare(post2[newValue]);
    //         })
    //     }
    // }
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
.app_btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}
</style>