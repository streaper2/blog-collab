<template>
        <div>
          
      <p>{{article}}</p>
        </div>  
        
</template>

<script>
export default {
    async asyncData({ params }) {
      const slug = params.id // En appelant /abc, le slug sera "abc".
      return { slug }
    }, 
 computed:{
   article(){
      return this.$store.state.articles[this.$route.params.id -1]
      
    },

  },
   mounted() {
        this.$store.dispatch('getArticles')
    },

 

}
</script>

<style>

</style>