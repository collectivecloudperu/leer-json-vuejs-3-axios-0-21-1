<template>

  <div class="container">

    <div class="row-12">

      <!-- <h1>{{ msg }}</h1> -->

      <div class="table-responsive">

        <table class="table mt-3" :items="postres" :fields="fields">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Stock</th>
              <th scope="col">Categoría</th>
              <th scope="col">Imagen</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="postre in postres" v-bind:key="postre.id">          
              <td>{{ postre.nombre }}</td>
              <td>{{ postre.precio }}</td>
              <td>{{ postre.stock }}</td>
              <td>{{ postre.url }} </td>                    
              <td>
                <img v-bind:src="'upload/' + postre.img" class="img-fluid ancho" v-bind:alt="postre.nombre">
              </td>          
            </tr>
          </tbody>
        </table> 

      </div>

    </div>

  </div>
  
</template>

<script>
  
  // Importamos el archivo de configuración de Axios 
  import API from '../api';

  export default {
    name: 'Postres',
    props: {
      msg: String
    }, 

    // Definimos los campos para los datos que mostraremos en la tabla HTML 
    data() {
      return {  
        fields: ['nombre', 'precio', 'stock', 'url', 'img'],
        id: "",
        nombre: "",
        precio: "",
        stock: "",
        url: "",
        img: "",        
        postres: [], // Creamos este array para almacenar los datos JSON 
      }
    },

    // Colocamos la ruta del EndPoint de la API REST y luego 
    // lo imprimimos en consola para verificar si estamos recibiendo datos 
    mounted() {
      
      API.get('https://nubecolectiva.com/api/v1/postres')
        .then(response => {
          this.postres = response.data.postres;
          console.log(this.postres); 
        });

    },

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ancho {
    width: 30px;
  }
</style>
