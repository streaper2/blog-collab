<template>
 
     <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{article.attributes.Name}}</h5>
                <p class="card-text">{{(article.attributes.description.substr(0, 90))}}...</p>
                <a href="#" class="btn btn-primary">Read</a>
            </div>
         
     </div>
        
</template>

<script>
export default {
   name: "ArticleCard",

   props:['article'],

   
}
</script>

<style>
    b-card {
        border: 2px solid burlywood;
    }
</style>