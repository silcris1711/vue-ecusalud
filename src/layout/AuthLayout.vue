<template>
    <div class="main-content fondos">
        <!-- Navbar -->
        <base-nav class="navbar-top navbar-horizontal navbar-dark"
                  containerClasses="px-4 container hidden"
                  expand>
               

            <template v-slot="{closeMenu}">
                <!-- Collapse header -->
                <div class="navbar-collapse-header d-md-none">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                          
                                <img src="img/brand/green.png">
                          
                        </div>
                        <div class="col-6 collapse-close">
                            <button type="button"
                                    @click="closeMenu"
                                    class="navbar-toggler"
                                    aria-label="Toggle sidenav">
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </template>
        </base-nav>
        <!-- Header -->
        <div class="header py-3 py-lg-4 reducir" >
            <div class="container">
                <div class="header-body text-center mb-7">
                    <div class="row justify-content-end">
                        <div class="col-lg-5 col-md-6">

                            <img src="img/brand/green.png" id="logo" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <!-- Page content -->
        <div class="container mt--8 pb-5">
            <slide-y-up-transition mode="out-in" origin="center top">
                <router-view></router-view>
            </slide-y-up-transition>
        </div>
        
    </div>
</template>
<script>
  import { SlideYUpTransition } from 'vue2-transitions'

  export default {
    name: 'auth-layout',
    components: {
      SlideYUpTransition
    },
    data() {
      return {
        year: new Date().getFullYear(),
        showMenu: false
      }
    }
  };
</script>
<style>
.fondos {
    background-image: url('https://images.pexels.com/photos/3952126/pexels-photo-3952126.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
}

.reducir {
    height: 450px;
}

#logo {
    width: 400px
}

.hidden {
    visibility: hidden;
}
</style>
