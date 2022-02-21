<template>
    <b-list-group-item class="d-flex justify-content-between align-items-center">
        <b-container fluid >
            <b-row>
                <b-col cols="11"  @click.prevent="toUpdatePage" >
                    {{ art.attributes.Name || 'No title' }}
                </b-col>
                <b-col class="but" cols="1"  align-self="stretch" >
                    <b-button variant="success" @click="deleteArt">EDIT</b-button>
                    <b-button variant="danger" @click="deleteArt">X</b-button>
                </b-col>
            </b-row>
        </b-container>
        
        <!-- <b-container @click.prevent="toUpdatePage"  >
            {{ art.attributes.Name || 'No title' }}
        </b-container> -->
        <!-- on récupere le title de l'article via le proprs et si on a rien  on affiche "no title" -->
            
        <!-- <b-container style="background-color: red;">
            <b-button variant="success" @click="deleteArt">v</b-button>
            <b-button variant="danger">x</b-button>
        </b-container> -->
    </b-list-group-item>
</template>

<script>
export default {
    props:["art"]
    ,methods: {
        toUpdatePage(){
            this.$router.push({path:"/admin/posts/update/"+this.art.id})
        },
        deleteArt(){
            this.$store.dispatch('deleteArticle',this.art.id)
        }
    },
}
</script>

<style>
.but{
    display: flex;
    justify-content: space-around;
}


   
</style>