<template>
	<div>
        <base-header type="gradient-success" class="pb-2 pt-5 pt-md-8 screen">
			<div class="row">
				<div class="col-sm-12">
					<div class="row">						
						<div class="col-sm-12 col-md-3 pr-md-0 mb-4">
							<base-dropdown class="total-dropdown">
								<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
									{{ names.institucion }}
								</base-button>
								<div class="dropdown-item" v-for="(option) in institutions" :key="option.id" @click="institucion(option)">{{ option.name }}</div>
							</base-dropdown>
							
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<base-input placeholder="Unidad operativa"
										class="input-group-alternative"
										alternative=""
										disabled
										v-model="inst.unidad">
							</base-input>
						</div>
						<div class="col-sm-12 col-md-1 pr-md-0">
							<base-input placeholder="Código UO"
										class="input-group-alternative"
										alternative=""
										disabled
										v-model="inst.codigo">
							</base-input>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<base-input placeholder="Área nro."
										class="input-group-alternative"
										alternative=""
										disabled
										v-model="inst.area">
							</base-input>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<base-input placeholder="Código localización"
										class="input-group-alternative"
										alternative=""
										disabled
										v-model="inst.localizacion">
							</base-input>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<base-input placeholder="Ficha familiar"
										class="input-group-alternative"
										alternative=""
										addon-right-icon=""
										v-model="item.ficha">
							</base-input>
						</div>
						<!-- 2da parte	-->
						<div class="col-sm-12 col-md-2 pr-md-0">
							<base-input placeholder="Provincia"
										class="input-group-alternative"
										alternative=""
										addon-right-icon="fas fa-search"
										v-model="item.provincia">
							</base-input>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<base-input placeholder="Canton"
										class="input-group-alternative"
										alternative=""
										addon-right-icon="fas fa-search"
										v-model="item.canton">
							</base-input>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<base-input placeholder="Parroquia"
										class="input-group-alternative"
										alternative=""
										addon-right-icon=""
										v-model="item.parroquia">
							</base-input>
						</div>
						<div class="col-sm-12 col-md-1 pr-md-0">
							<base-input placeholder="Sector"
										class="input-group-alternative"
										alternative=""
										addon-right-icon=""
										v-model="item.sector">
							</base-input>
						</div>
						<div class="col-sm-12 col-md-1 pr-md-0">
							<base-input placeholder="Manzana"
										class="input-group-alternative"
										alternative=""
										addon-right-icon=""
										v-model="item.manzana">
							</base-input>
						</div>
						<div class="col-sm-12 col-md-1 pr-md-0">
							<base-input placeholder="# Familia"
										class="input-group-alternative"
										alternative=""
										addon-right-icon=""
										v-model="item.familia">
							</base-input>
						</div>
						<div class="col-sm-12 col-md-3 pr-md-0">
							<base-input placeholder="Dirección habitual de la familia"
										class="input-group-alternative"
										alternative=""
										addon-right-icon=""
										v-model="item.direccion">
							</base-input>
						</div>
						<!-- 3er parte	-->
						<div class="col-sm-12 col-md-1 pr-md-0">
							<base-input placeholder="Barrio"
										class="input-group-alternative"
										alternative=""
										addon-right-icon=""
										v-model="item.barrio">
							</base-input>
						</div>
						<div class="col-sm-12 col-md-1 pr-md-0">
							<base-input placeholder="Nro. casa"
										class="input-group-alternative"
										alternative=""
										addon-right-icon=""
										v-model="item.casa">
							</base-input>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<base-input placeholder="Comunidad"
										class="input-group-alternative"
										alternative=""
										addon-right-icon=""
										v-model="item.comunidad">
							</base-input>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<base-input placeholder="Grupo cultural"
										class="input-group-alternative"
										alternative=""
										addon-right-icon=""
										v-model="item.grupo">
							</base-input>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<base-input placeholder="Nombre del Jefe de Familia"
										class="input-group-alternative"
										alternative=""
										addon-right-icon=""
										v-model="item.jefefamilia">
							</base-input>
						</div>
						<div class="col-sm-12 col-md-1 pr-md-0">
							<base-input placeholder="Telefono"
										class="input-group-alternative"
										alternative=""
										addon-right-icon=""
										v-model="item.telefono">
							</base-input>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<base-input placeholder="Fecha de llenado"
										class="input-group-alternative"
										alternative=""
										addon-right-icon=""
										v-model="item.hoy">
							</base-input>
						</div>
						<div class="col-sm-12 col-md-1 pr-md-0">
							<base-input placeholder="Nro. carpeta"
										class="input-group-alternative"
										alternative=""
										addon-right-icon=""
										v-model="item.carpeta">
							</base-input>
						</div>

					</div>
				</div>			
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="col-sm-12 text-center py-2 display-1">
							<h3 class="text-white pt-3">Información de Georeferencia</h3>
						</div>
						<div class="col-sm-12 col-md-4">
							<base-input placeholder="Latitud"
										class="input-group-alternative"
										alternative=""
										addon-right-icon=""
										v-model="item.latitud">
							</base-input>
						</div>
						<div class="col-sm-12 col-md-4">
							<base-input placeholder="Longitud"
										class="input-group-alternative"
										alternative=""
										addon-right-icon=""
										v-model="item.longitud">
							</base-input>
						</div>
						<div class="col-sm-12 col-md-4">
							<base-input placeholder="Altitud"
										class="input-group-alternative"
										alternative=""
										addon-right-icon=""
										v-model="item.altitud">
							</base-input>
						</div>
						<div class="col-12 d-flex justify-content-end">
							<base-button type="primary" @click="modal = true">Guardar</base-button>
						</div>
					</div>
				</div>
			</div>
        </base-header>
        <modal :show.sync="modal"
				gradient="primary"
               body-classes="p-0"
               modal-classes=" modal-dialog-centered modal-sm">
            <card type="secondary" shadow
                  header-classes="bg-white pb-5"
                  body-classes="px-lg-5 py-lg-5"
                  class="border-0">
                
                <template slot="header">
                <h5 class="modal-title">Confirmación</h5>	
                </template>
				<h4>¿Está seguro de la información que va a anexar?</h4>
                <template slot="footer">
					<div class="row">
						<base-button type="primary" class="ml-auto" @click="send">Aceptar</base-button>
						<base-button type="secondary" @click="modal = false">Cancelar</base-button>
					</div>
					
                </template>
            </card>
        </modal>
        <modal :show.sync="success"
               body-classes="p-0"
               modal-classes="modal-dialog-centered modal-sm">
               <base-alert type="success">
					<strong>Éxito!</strong> Información guardada
				</base-alert>
        </modal>

        
    </div>
</template>

<script>

export default {
	name: 'georeferencia',
	data() {
		return {
			modal: false,
			success: false,
			institutions: [
				{id:1, name: 'Centro Médico BIOTEST', group: 'Médica', area: 'Medicina General' , code: 'CM-01', loc: 'EC-DT-QQ-NE-01' },
				{id:2, name: 'Centro Médico Espejo', group: 'Médica', area: 'Cirugía Reconstructiva', code: 'CM-02', loc: 'EC-DT-QQ-NE-02'},
				{id:3, name: 'Centro Médico Medikal Garzota', group: 'Médica', area: 'Medicina General', code: 'CM-03', loc: 'EC-DT-QQ-NE-03'},
				{id:4, name: 'Centro Médico Benalcazar', group: 'Médica', area: 'Recuperación', code: 'CM-04', loc: 'EC-DT-QQ-NE-04'}
			],
			names: {
				institucion: 'Institución'
			},
			inst: {
				institucion: '',
				unidad: '',
				codigo: '',
				area: '',
				localizacion: '',
			},
			item: {
				institucion: '',
				ficha: '',
				provincia: '',
				canton: '',
				parroquia: '',
				sector: '',
				manzana: '',
				familia: '',
				direccion: '',
				barrio: '',
				casa: '',
				comunidad: '',
				grupo: '',
				jefefamilia: '',
				telefono: '',
				hoy: new Date(),
				carpeta: '',
				latitud: '',
				longitud: '',
				altitud: ''
			}
		}
	},
	mounted() {
	},
	methods: {
		send() {
			this.modal= false;
			this.$store.commit('referenciar', this.item)
			this.success = true;
			setTimeout(this.hidden, 1000);
			setTimeout(this.siguiente, 2000);
			
		},
		siguiente() {
			this.$router.push({name: 'familia por edad'})
		},
		institucion(option) {
			this.names.institucion = option.name;
			this.item.institucion = option.name;
			this.inst.unidad = option.group;
			this.inst.codigo = option.code;
			this.inst.area = option.area
			this.inst.localizacion = option.loc;
		},
		hidden() {
			this.success = false;
		},
		seguir() {

		},
		clear() {
			this.names.institucion= 'Institución';
			this.inst= {
				institucion: '',
				unidad: '',
				codigo: '',
				area: '',
				localizacion: '',
			},
			this.item = {
				institucion: '',
				ficha: '',
				provincia: '',
				canton: '',
				parroquia: '',
				sector: '',
				manzana: '',
				familia: '',
				direccion: '',
				barrio: '',
				casa: '',
				comunidad: '',
				grupo: '',
				jefefamilia: '',
				telefono: '',
				hoy: new Date(),
				carpeta: '',
				latitud: '',
				longitud: '',
				altitud: ''
			}

		},
	}
};
</script>
<style>
.screen {
	height: 100vh;
}
.total-dropdown {
	width: 100%;
}
.bg-gradient-success {
    background: linear-gradient(87deg, #40e0d0 0, #87ceeb 100%);
}
</style>