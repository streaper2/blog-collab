<template>
  <div>
    <h1>{{article.id}}</h1>
      <p>{{article.attributes.description}}</p>
  </div>
</template>

<script>
export default {
  //a ameliorer pour tester de le recup avec le getter
   computed:{
    article(){  
      return this.$store.state.articles.filter(article => article.id == this.$route.params.id)[0]
    },
  },
}
</script>

<style>

</style>