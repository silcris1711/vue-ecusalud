<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <div class="row">
              <tabs fill class="flex-column flex-md-row total">
                <card shadow>
                    <tab-pane>
                        <span slot="title">
                            <i class="ni ni-folder-17"></i>
                            FICHA FAMILIAR
                        </span>
                        <div>
                          <div class="row tag-content">
                                <div class="col-lg-4 col-md-6 mt-3"
                                     v-for="(item, index) in options_ficha" :key="item.name + index"
                                     @click="goTo(item.url)">
                                     <stats-card :title="item.name"
                                                  type="gradient-orange"
                                                  sub-title=""
                                                  
                                                  class="mb-4 mb-xl-0"
                                                  :image="item.img"         
                                      >
                                      </stats-card>
                                </div>
                            </div>
                        </div>
                    </tab-pane>
                    <tab-pane>
                        <span slot="title">
                            <i class="ni ni-badge mr-2"></i>
                            PERSONAL MÉDICO
                        </span>
                        <div>
                          <div class="row tag-content">
                            <div class="col-lg-4 col-md-6 mt-3"
                                  v-for="(item, index) in options_personal" :key="item.name + index">
                              <stats-card :title="item.name"
                                          type="gradient-orange"
                                          :sub-title="item.speciality"
                                          class="mb-4 mb-xl-0"
                                          image="img/main-menu/doctor.png">
                                      </stats-card>
                            </div>
                            
                          </div>
                        </div>
                    </tab-pane> 
                </card>
            </tabs>               
            </div>
        </base-header>
    </div>
</template>
<script>

  export default {
    components: {
    },
    props: {
      auth: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        view: [],
        options_ficha: [
          {name: 'Información Geo referenciada', img: 'img/main-menu/georeferencia.jpg', url: '/georeferencia'},
         {name: 'Miembros de la familia por grupo de edad', img: 'img/main-menu/familia.jpg', url:'familia-por-edad'},
          {name: 'Puntos de contaminación', img: 'img/main-menu/contaminacion.jpg', url:'ubicacion-vivienda'},
          {name: 'Mortalidad familiar', img: 'img/main-menu/mortalidad.png', url: 'mortalidad-familiar'},
          {name: 'Calificación de riesgo familiar', img: 'img/main-menu/calificacion.jpg', url: 'riesgo-familiar'},
          {name: 'Evolución de gestión del riesgo familiar', img: 'img/main-menu/evolucion.jpg', url: 'evolucion-familiar'},
        ],
        options_personal: [
          {name: 'Dr. Jose Montilla', speciality: 'Anestesiología'},
          {name: 'Dra. Maria Yajure', speciality: 'Neurocirugía'},
          {name: 'Dra. Silvia Martinez', speciality: 'Gastroenterología'},
          {name: 'Dr. Eder Briceño', speciality: 'Traumatología'},
          {name: 'Dr. Jhon Colmenarez', speciality: 'Medicina Interna'}
        ]


        };
    },
    methods: {
      more(option) {
        if (option == 'ficha'){
          this.view = this.options_ficha;
        }
        if (option == 'personal') {
          this.view = this.options_personal;
        }
      },
      goTo(url) {
        this.$router.push(url);
      }
      
    },
    computed: {
      options: function() {
        return this.show;
        

      }
    },
    mounted() {
      
     
    },

  };
</script>
<style>
.total {
  width: 100%;
}
</style>
