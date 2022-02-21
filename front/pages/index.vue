<template>
    <Div class="container-fluid">
        <H1 class="text-center">WELCOME TO THE BLOG</h1>
            <Div class="row mt-5" >
                <Div class="col-sm-4 mb-3" v-for="(article, index) in articles" :key="index">
                    <ArticleCard :article="article"/>
                </Div>
            </Div> 
    </Div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    computed:{
    articles(){
        return this.$store.state.articles
    }
   },
   mounted() {
        this.$store.dispatch('getArticles')
    
    },
    layout: 'header'
    
    
})
</script>

<style lang="scss" scoped>
    
</style>
