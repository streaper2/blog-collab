//on se servira des getters pour récupérer les données modifié que d'une certaine facon.

export default {
     getArticleById:  (state) => (id) => {
        console.log("GETTERS", id)
      
         
        console.log("find", state.articles.find(article => article.id === id) )
        return  JSON.stringify(state.articles.find(article => article.id === id))
    }
}