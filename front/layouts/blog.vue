<template>
  <div>
     <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">KaelAngeBlog</a>
            <ul>
                <NuxtLink to="/" class="link">Accueil</NuxtLink>
                <NuxtLink to="/admin/posts" class="link">Admin</NuxtLink>
                <NuxtLink to="/admin/posts/create" class="link">Create article</NuxtLink>
            </ul>
        </div>
     </nav>
        <nuxt class="container" />
  </div>
</template>

<script>
export default {

}
</script>

<style>
   ul{
      display: flex;
      
      list-style-type: none;
      font-size: 1.3rem;
      font-weight: bolder;
   }

   .link{
      margin: auto 20px;
   }

</style>