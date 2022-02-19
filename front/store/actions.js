//le fichier actions pour les requetes axios, et autre logique au niveau du blog on peut recuperer les state via {state, commit,getters}

export default {
    async nuxtServerInit({commit}) {
        //on stock les données dans une variable et on va a l'essentiel via ().data.data
        let art = (await this.$axios.get('articles')).data.data

        //on commit les données pour que la mutation les enregistres dans le state
        commit('GET_ARTICLES',art)
    },

    increment({commit}){
        commit('INCREMENT')
    },
    decrement({commit}){
        commit('DECREMENT')
    },
    //on recupere les données de facon asyncrone
    async getArticles({commit}){

        //on stock les données dans une variable et on va a l'essentiel via ().data.data
        let art = (await this.$axios.get('articles')).data.data

        //on commit les données pour que la mutation les enregistres dans le state
        commit('GET_ARTICLES',art)

        
    }


}