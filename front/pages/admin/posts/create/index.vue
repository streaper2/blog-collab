<template>
  <div>
    
      <b-form-input
        v-model="text"
        placeholder="Entrer votre titre"
      ></b-form-input>
      <b-form-textarea
        id="textarea"
        v-model="description"
        placeholder="Entrer le titre du blog"
        rows="3"
        max-rows="6"
      >
      </b-form-textarea>

      <b-button type="submit" variant="primary" @click="createArticle" >Créer</b-button>
      <b-button type="reset" variant="danger" @click="resetForm">réinitialiser</b-button>

  </div>
</template>

<script>
export default {
    data() {
        return {
            text: "",
            description: "",
        }
    },
    methods: {
        createArticle() {
            console.log(this.text, this.description);
            this.$store.dispatch('createArticle', {
                Name: this.text,
                description: this.description,
                
            });
            this.text = '';
            this.description = '';
        },
        resetForm() {
            this.text = '';
            this.description = '';
        }
    },
};
</script>

<style>
</style>