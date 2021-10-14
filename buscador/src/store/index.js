import Vue from 'vue'
import Vuex from 'vuex'
import peliculas from './../assets/peliculas.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peliculas: peliculas,
    filter: {
      movieReseach:'',
      available: true
    }
  },
  mutations: {
    SET_BUSQUEDA(state, movieReseach){
      state.filter.movieReseach = movieReseach;
    },
    SET_AVAILABLE(state){
      state.filter.available = ! state.filter.available;
    } 
  },
  getters: {
     peliculasDisponibles(state){
       let peliculas= state.peliculas.filter(pelicula => pelicula.available === state.filter.available);
       if(state.filter.movieReseach.length > 3){
        return peliculas.filter(pelicula => pelicula.titlle.toLocaleLowerCase().includes(state.filter.movieReseach));
        }
        return peliculas;
     },
  },
  actions: {
  },
  modules: {
  },
  strict: true
})
