export default{
    INCREMENT(state) {
        state.counter++
    },
    DECREMENT(state){
          state.counter--
    },
    //on recupere le state et le payload "articles" et on enregistre dans le state les articles recupéré de facon asynchronne dans l'action
    GET_ARTICLES(state,articles){
        state.articles = articles
    },
    GET_ARTICLE_BY_ID(state,id){
        console.log("GET ARTICLE ID", id)
        let art =  state.articles.filter(article => article.id == id)
        console.log("find",JSON.stringify(art))
        return JSON.stringify(art)
        
    },
    DELETE(state,id){
        state.articles = state.articles.filter(article => article.id !== id)
    }

}