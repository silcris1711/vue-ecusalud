<template>
	<div>
		<base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <div class="row">
              <tabs fill class="flex-column flex-md-row total">
                <card shadow>
                    <tab-pane>
                        <span slot="title">
                            <i class="ni ni-folder-17"></i>
                            Inf. Georeferencia
                        </span>
                        <div>
                          <div class="row tag-content">
                            <div class="col-sm-6 text-center text-white pb-2 h4">
                                Institución
                            </div>
                            <div class="col-sm-6 text-left text-white pb-2 h4">
                                {{ $store.state.georeferencia.institucion }}
                            </div>
                            <div class="col-sm-6 text-center text-white pb-2 h4">
                                Ficha familiar
                            </div>
                            <div class="col-sm-6 text-left text-white pb-2 h4">
                                {{ $store.state.georeferencia.ficha }}
                            </div>
                            <div class="col-sm-6 text-center text-white pb-2 h4">
                                Provincia
                            </div>
                            <div class="col-sm-6 text-left text-white pb-2 h4">
                                {{ $store.state.georeferencia.provincia }}
                            </div>
                            <div class="col-sm-6 text-center text-white pb-2 h4">
                                Parroquia
                            </div>
                            <div class="col-sm-6 text-left text-white pb-2 h4">
                                {{ $store.state.georeferencia.parroquia }}
                            </div>
                            <div class="col-sm-6 text-center text-white pb-2 h4">
                                Sector
                            </div>
                            <div class="col-sm-6 text-left text-white pb-2 h4">
                                {{ $store.state.georeferencia.sector }}
                            </div>
                            <div class="col-sm-6 text-center text-white pb-2 h4">
                                Número de manzana
                            </div>
                            <div class="col-sm-6 text-left text-white pb-2 h4">
                                {{ $store.state.georeferencia.manzana }}
                            </div>
                            <div class="col-sm-6 text-center text-white pb-2 h4">
                                Numero de familia
                            </div>
                            <div class="col-sm-6 text-left text-white pb-2 h4">
                                {{ $store.state.georeferencia.familia }}
                            </div>
                            <div class="col-sm-6 text-center text-white pb-2 h4">
                                Dirección habitual
                            </div>
                            <div class="col-sm-6 text-left text-white pb-2 h4">
                                {{ $store.state.georeferencia.direccion }}
                            </div>
                            <div class="col-sm-6 text-center text-white pb-2 h4">
                                Barrio
                            </div>
                            <div class="col-sm-6 text-left text-white pb-2 h4">
                                {{ $store.state.georeferencia.barrio }}
                            </div>
                            <div class="col-sm-6 text-center text-white pb-2 h4">
                                Número de casa
                            </div>
                            <div class="col-sm-6 text-left text-white pb-2 h4">
                                {{ $store.state.georeferencia.casa }}
                            </div>
                            <div class="col-sm-6 text-center text-white pb-2 h4">
                                Comunidad
                            </div>
                            <div class="col-sm-6 text-left text-white pb-2 h4">
                                {{ $store.state.georeferencia.comunidad }}
                            </div>
                            <div class="col-sm-6 text-center text-white pb-2 h4">
                                Grupo cultural
                            </div>
                            <div class="col-sm-6 text-left text-white pb-2 h4">
                                {{ $store.state.georeferencia.grupo }}
                            </div>

                            <div class="col-sm-6 text-center text-white pb-2 h4">
                                Jefe de familia
                            </div>
                            <div class="col-sm-6 text-left text-white pb-2 h4">
                                {{ $store.state.georeferencia.jefefamilia }}
                            </div>
                            <div class="col-sm-6 text-center text-white pb-2 h4">
                               Telefono
                            </div>
                            <div class="col-sm-6 text-left text-white pb-2 h4">
                                {{ $store.state.georeferencia.telefono }}
                            </div>

                             <div class="col-sm-6 text-center text-white pb-2 h4">
                                Número de carpeta
                            </div>
                            <div class="col-sm-6 text-left text-white pb-2 h4">
                                {{ $store.state.georeferencia.carpeta }}
                            </div>
                            <div class="col-sm-6 text-center text-white pb-2 h4">
                                Latitud
                            </div>
                            <div class="col-sm-6 text-left text-white pb-2 h4">
                                {{ $store.state.georeferencia.latitud }}
                            </div>

                            <div class="col-sm-6 text-center text-white pb-2 h4">
                                Longitud
                            </div>
                            <div class="col-sm-6 text-left text-white pb-2 h4" >
                                {{ $store.state.georeferencia.longitud }}
                            </div>
                            <div class="col-sm-6 text-center text-white pb-2 h4">
                              Altitud
                            </div>
                            <div class="col-sm-6 text-left text-white pb-2 h4">
                                {{ $store.state.georeferencia.altitud }}
                            </div>

                                
                            </div>
                        </div>
                    </tab-pane>
                    <tab-pane>
                        <span slot="title">
                            <i class=""></i>
                            Miembros de familia
                        </span>
                        <div>
                          <div class="row tag-content">
                                <base-table :columns="columns_member"
                                            :data="familia"
                                            type="striped"
                                >
                                </base-table>
                            
                            
                          </div>
                        </div>
                    </tab-pane> 
                    <tab-pane>
                        <span slot="title">
                            <i class=""></i>
                            Mortalidad familiar
                        </span>
                        <div>
                          <div class="row tag-content">
                        
                                <base-table :columns="columns_mortality"
                                            :data="fallecidos"
                                            type="striped"
                                >
                                </base-table>
                          </div>
                        </div>
                    </tab-pane> 
                    <tab-pane>
                        <span slot="title">
                            <i class=""></i>
                           Calificación de riesgo
                        </span>
                        <div>
                          <div class="row tag-content">
                            <h3 class="h1 text-white mx-auto">Puntos de riesgo: {{ valoracion }} / 72</h3>  
                           
                            
                            
                            
                          </div>
                        </div>
                    </tab-pane> 
                    <tab-pane>
                        <span slot="title">
                            <i class=""></i>
                            Evolucion familiar
                        </span>
                        <div>
                          <div class="row tag-content">
                          
                           
                                <base-table :columns="columns_evolution"
                                            :data="evolucion"
                                            type="striped"
                                >
                                </base-table>                           
                            
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
    name: 'Total',
    data() {
        return {
            columns_member: [
                'Grupo',
                'Nombre',
                'Parentesco',
                'Nacimiento',
                'Ocupacion',
                'Sexo',
                'Historia',
                'Cedula',
            ],
            columns_mortality: [
                'Nombre',
                'Parentesco',
                'Edad',
                'Causa',
            ],
            columns_evolution: [
                'Familia',
                'Sanitarios',
                'Cumplimiento',
                'Causa'
            ],
            valoracion: this.$store.state.calificacion,
            familia: this.$store.state.familia,
            fallecidos: this.$store.state.mortalidad,
            evolucion: this.$store.state.evolucion,
        }
    }
};
	
</script>

<style>

	
</style>