<template>
        <div class="row justify-content-end">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-header bg-transparent pb-1">
                        <div class="text-muted text-center mt-2 mb-3 style">Ingresa tus credenciales</div>
                        
                    </div>
                    <div class="card-body px-lg-5 py-lg-5">
                        <form role="form">
                            <base-input class="input-group-alternative mb-3"
                                        placeholder="Usuario"
                                        addon-left-icon="ni ni-email-83"
                                        v-model="model.email">
                            </base-input>

                            <base-input class="input-group-alternative"
                                        placeholder="Clave"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="model.password">
                            </base-input>

                            <base-checkbox class="custom-control-alternative">
                                Recuerdame
                            </base-checkbox>
                            <div class="text-center">
                                <base-button type="primary" class="my-4" @click="signin">Ingresar</base-button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row mt-3">
                    
                </div>
            </div>
        </div>
</template>
<script>
  export default {
    name: 'login',
    data() {
      return {
        users: [
            {
                email: 'admin',
                password: 'admin',
                user: 'Administrador'
            },
            {
                email: 'enfermera',
                password: 'enfermera',
                user: 'Enfermera'
            },
          

        ],
        model: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
        signin() {
            this.users.find(e => {
                if (e.email == this.model.email && e.password == this.model.password) {
                    this.$store.commit('signin', e.user);
                    this.$router.push({name: 'bienvenido'})
                }
            })
            
        }
    }
  };
</script>
<style>
.style {
    font-size: 16px;
}
</style>
