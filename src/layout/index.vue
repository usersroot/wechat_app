<template>
    <div class="layout_box">
        <div class="content">
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from 'components/footer'
export default {
    components:{
        Footer,
    }
}
</script>

<style lang="less">
html,body,#app{
    width: 100%;
    height: 100%;
}
.layout_box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .content{
        flex:1;
        overflow: hidden;
    }
}

</style>