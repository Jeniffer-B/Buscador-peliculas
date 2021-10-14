<template>
    <div class="row d-flex justify-content-center">
        <h1 class="mt-4 p-2">Buscador de Vuex</h1>
        <NavBar></NavBar>
        <InfoMovie></InfoMovie>
    </div>
</template>
<script>
import NavBar from './NavBar.vue'
import InfoMovie from './movieCard.vue'

export default{
    name: 'BuscadorPeliculas',
    components:{
        NavBar,
        InfoMovie
    }
}
</script>
