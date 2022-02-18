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
      return this.$store.state.articles[this.$route.params.id -1]
    }
    
  },
}
</script>

<style>

</style>