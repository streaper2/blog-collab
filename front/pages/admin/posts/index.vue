<template>
  <div>
        <b-list-group v-for="art in articles" :key="art.attributes.id" >
            <AdminPostList :art="art" />
        </b-list-group>
  </div>
</template>

<script>
export default {
    computed: {
       
        articles(){
            
            return this.$store.state.articles
        }
    },
    mounted() {
        this.$store.dispatch('getArticles')
    },
    layout: 'blog'
}
</script>

<style>

</style>