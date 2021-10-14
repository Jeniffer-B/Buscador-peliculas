<template>
  <div id="app" class="container">
    <div class="col-12">
      <BuscadorPeliculas></BuscadorPeliculas>
      <list-movies></list-movies>
    </div>
  </div>
</template>
<script>
import BuscadorPeliculas from './components/BuscadorPeliculas.vue'
import ListMovies from './components/ListMovies.vue'
export default {
  name: 'App',
  components:{
    BuscadorPeliculas,
    ListMovies
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
