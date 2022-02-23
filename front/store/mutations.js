export default{
 
    //on recupere le state et le payload "articles" et on enregistre dans le state les articles recupéré de facon asynchronne dans l'action
    GET_ARTICLES(state,articles){
        state.articles = articles
    },
    DELETE(state,id){
        state.articles = state.articles.filter(article => article.id !== id)
    }
}