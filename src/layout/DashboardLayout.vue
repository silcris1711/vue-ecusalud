<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Ecusalud"
      title="EcuSalud"
    >
      <template slot="links" v-if="type != 'Paciente'">
         
        <sidebar-item v-for="(option,index) in options_ficha" :key="index" 
                      :link="{ name: option.name, 
                                icon: option.icon ,
                                path: option.url}"
        ></sidebar-item>

      </template>
      <template slot="links" v-else>
        <sidebar-item v-for="(option,index) in options_paciente" :key="index" 
                      :link="{ name: option.name, 
                                icon: option.icon ,
                                path: option.url}"
        ></sidebar-item>
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      FadeTransition
    },
    data() {
      return {
        type: this.$route.params.auth,
        sidebarBackground: 'blue', //vue|blue|orange|green|red|primary
        options_ficha: [
          {name: 'Inicio', icon: 'ni ni-tv-2', url: '/dashboard'},
          {name: 'Información Geo referenciada', icon: 'ni ni-square-pin', url: '/georeferencia'},
        /* {name: 'Miembros de la familia por grupo de edad', icon: 'ni ni-collection', url:'/familia-por-edad'},*/
          {name: 'Puntos de contaminación', icon:'ni ni-support-16', url:'/dashboard'},
          {name: 'Mortalidad familiar', icon: 'ni ni-paper-diploma', url: '/mortalidad-familiar'},
          {name: 'Calificación de riesgo familiar', icon: 'ni ni-check-bold', url: '/riesgo-familiar'},
          {name: 'Evolución de gestión del riesgo familiar', icon: 'ni ni-chart-bar-32', url: '/evolucion-familiar'},
          {name: 'Resultados', icon: 'ni ni-chart-bar-32', url: '/resultados'},
        ],
        options_paciente: [
          {name: 'Resultados', icon: 'ni ni-chart-bar-32', url: '/resultados'},
        ]
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style>
h6.navbar-heading.text-muted {
  visibility: hidden;
}

.navbar-nav.mb-md-3 {
  visibility: hidden;
}

.nav-link.active {
    color: #40e0d0;
}

.navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active {
  color: #40e0d0;
}
</style>
