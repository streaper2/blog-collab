<template>
  <div class="d-flex align-items-center min-vh-100 text-center flex-column">
      <h1>Blog template</h1>
      <br />
      <div v-for="post in posts" :key="post.id" >
          <h1> {{post.attributes.Name}} </h1>
          <p> {{ post.attributes.description}} </p>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            posts: []
        }
    },
     async mounted() {
        let art =   (await this.$axios.get('http://localhost:1337/api/articles')).data.data;
        this.posts=art;
        console.log( art );
    },
}
</script>

<style>

</style>