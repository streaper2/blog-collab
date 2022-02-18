<template>
<div class="container-fluid">
      <h1 class="text-center">WELCOME TO THE BLOG</h1>
          <div class="row mt-5" >
             <div class="col-sm-4 mb-3" v-for="(article, index) in articles" :key="index">
                <ArticleCard :article="article"/>
             </div>
          </div> 
      </div>
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
    
    }
})
</script>

<style lang="scss" scoped>
    
</style>
