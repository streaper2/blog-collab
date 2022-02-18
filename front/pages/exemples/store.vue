<template>
  <div class="d-flex align-items-center min-vh-100 text-center flex-column">
      <p> store exemple</p>
      <p>{{ count }} </p> 
      <button @click="decrement" >-</button>
      <button @click="increment" >+</button>

      <div v-for="article in articles" :key='article.attributes.id' >
          
          <ArticleCard :title="article.attributes.Name"  :desc="article.attributes.description" />
 
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        count(){
            return this.$store.state.counter
        },
        articles(){
            return this.$store.state.articles
        }
    },
    mounted() {
        this.$store.dispatch('getArticles')
    
    },
    methods: {
        increment() {
            this.$store.dispatch("increment")
        },
        decrement() {
            this.$store.dispatch("decrement")
        }
    },
}
</script>

<style>

</style>