<template>
    <div>
        <div class="row" v-if="peliculas.length > 0">
            <movieCard
                :pelicula="pelicula"
                v-for="pelicula in peliculas"
                :key="pelicula.id"
            >
            </movieCard>
        </div>
        <div v-else="" class="alert alert-danger">No hay peliculas disponibles</div>
    </div>   
</template>
<script>
    import movieCard from './movieCard.vue';
    import {mapGetters} from 'vuex';
    export default{
        name: 'ListMovies',
        components:{
            movieCard
        },
        computed: {
            ...mapGetters({
                peliculas: 'peliculasDisponibles'
            })
        }
    }
</script>