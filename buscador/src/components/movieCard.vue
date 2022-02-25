<template>
    <div class="mt-3 col-sm-6">
        <div class="card">
            <div class="card-header bg-dark">
                <h4 class="card-title text-white">{{pelicula.titlle}}</h4>
                <h6 class="available text-white">Available:{{pelicula.available}}</h6>
            </div>
            <div class="card-body ">
                <p class="card-text">{{pelicula.description}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'moviecard',
        props:{
            pelicula:{
                type: Object,
                required: true
            }
        }
    }
</script>