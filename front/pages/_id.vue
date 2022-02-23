<template>
    <div> 
        <p>{{article.attributes.Name }}</p>
        <article>
          {{article.attributes.description }}
        </article>
        
    </div>  
        
</template>

<script>
export default {
  layout: 'header',
    async asyncData({ params }) {
      const slug = params.id // En appelant /abc, le slug sera "abc".
      return { slug }
    },
   
    computed: {
        article(){
            return this.$store.state.articles.filter(article => article.id == this.slug)[0]
       
        }
    },


 

}
</script>

<style>

</style>