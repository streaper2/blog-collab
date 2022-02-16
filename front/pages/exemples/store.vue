<template>
  <div class="d-flex align-items-center min-vh-100 text-center flex-column">
      <p> store exemple</p>
      <p>{{ count }} </p> 
      <button @click="decrement" >-</button>
      <button @click="increment" >+</button>
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
        }
    },
    methods: {
        increment() {
            this.$store.commit("increment")
        },
        decrement() {
            this.$store.commit("decrement")
        }
    },
}
</script>

<style>

</style>