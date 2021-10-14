<template>
  <div class="hello">
    <template v-for="(pelicula) in $store.getters.peliculasConNumero"
    >
        {{pelicula}}
    </template>
    <h1>{{ msg }}</h1>
    <p>
     
    </p>
   
 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
