<template>
    <div class="row mt-2">
        <div class="col">
            <b-form-input
                class="b-col sm=2 formReseach" 
                type="text"
                v-model="search" 
                placeholder="Introduzca la busqueda">
            </b-form-input>
            <div class="form-check form-check-inline">
                <input 
                    class="form-radio-input"
                    v-model="available"
                    :value="true"
                    type="radio"
                />
                Disponible
            </div>
            <div class="form-check form-check-inline">
                <input 
                    class="form-radio-input"
                    v-model="available"
                    :value="false"
                    type="radio"
                />
                No Disponible
            </div>
        </div>   
    </div>
</template>
<script>
export default{
    name: 'NavBar',
    computed:{
        search:{
            get(){
                return this.$store.state.filter.movieReseach;
            },
            set (value){
                this.$store.commit('SET_BUSQUEDA', value);
            }
        },
        available:{
            get(){
                return this.$store.state.filter.available;
            },
            set(){
                this.$store.commit('SET_AVAILABLE');
            }
        }
    }
}
</script>