import Vue from 'vue';

export default ()=>{
    Vue.filter('truncate', (value, length=50) => {
        if(!value) return '...'
        return value.length > length ? value.substring(0, length) + '...' : value
  
    })
}

