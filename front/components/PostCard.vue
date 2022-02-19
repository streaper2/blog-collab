<template>
  <div>

        <b-card
          img-top
          :title="title"
          :img-src="img"
          style="width: 18rem; border: 2px solid red;"
          class="mb-5">
        </b-card>

  </div>
</template>

<script>
export default {
    props:["title","img"],
    mounted() {
      console.log(this.img)
    },

}
</script>

<style>
    b-card {
        border: 2px solid burlywood;
        cursor: pointer;
    }

  
</style>