//on se servira des getters pour récupérer les données modifié que d'une certaine facon.

export default {
     getArticleById:  (state)  => (id) =>  {
        console.log("GETTERS", id)
        let art = state.articles.filter(article => article.id == this.slug)[0]

        console.log("getter",state)
        //console.log(commit("GET_ARTICLE_BY_ID",id))
        //state.articles.find(article => article.id == id)
        //console.log("find",state.articles.find(article => article.id === id) )
        return  state.articles.filter(article => article.id == id)
    }
}