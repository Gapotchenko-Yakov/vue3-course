<template>
    <nav class="navbar">
        <div @click="$router.push('/')">YAGAPP</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/')" class="navbar__btn">Главная</my-button>
            <my-button @click="$router.push('/about')" class="navbar__btn">О сайте</my-button>
            <my-button @click="$router.push('/posts')" class="navbar__btn">Посты</my-button>
        </div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style>
    .navbar {
        height: 50px;
        background-color: lightgray;
        box-shadow: 2px 2px 4px gray;
        display: flex;
        align-items: center;
        padding: 0 15px;
    }
    .navbar__btns {
        margin-left: auto;
    }
    .navbar__btn {
        margin-left: 20px;
    }
</style>