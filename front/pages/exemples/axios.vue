<template>
  <div class="d-flex align-items-center min-vh-100 text-center flex-column">
      <h1>AXIOS</h1>
      <br />
      
      
      <div v-for="drink in drinks" :key="drink.idDrink">
          <nuxt-link :to="'/update/'+drink.idDrink">
            <PostCard :title="drink.strDrink" :img="drink.strDrinkThumb" />
          </nuxt-link>
          
        <!-- <b-card
            img-top
            :title="drink.strDrink"
            :img-src="drink.strDrinkThumb"
            style="width: 18rem;"
            class="mb-5">
        </b-card> -->
     
      </div>
      
  </div>
</template>

<script>
export default {
    data() {
        return {
            drinks: []
        }
    },
    async mounted() {
        //this.drinks = this.$axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')

            let res = await this.$axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
            this.drinks = res.data.drinks

        console.log("mounted",
            this.drinks
        )
    },
  
}
</script>

<style>

</style>