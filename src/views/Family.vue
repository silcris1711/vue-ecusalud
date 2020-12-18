<template>
	<div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
			<div class="row">
				<div class="col-sm-12">
					<div class="row">						
						<div class="col-sm-12 col-md-4 pr-md-0">
							<div class="form-group mb-0">
								<base-input placeholder="Apellidos y Nombres"
											class="input-group-alternative"
											alternative=""
											addon-right-icon="ni ni-single-02"
											v-model="item.nombre">
								</base-input>
							</div>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<div class="form-group mb-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ names.parentesco }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in relations" :key="option.id" @click="relationship(option)">{{ option.name }}</div>
								</base-dropdown>							
							</div>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<div class="form-group mb-0">
								<base-input addon-left-icon="ni ni-calendar-grid-58">
									<flat-picker slot-scope="{focus, blur}"
												@on-open="focus"
												@on-close="blur"
												:config="{allowInput: true}"
												class="form-control datepicker"
												v-model="item.nacimiento">
									</flat-picker>
								</base-input>
							</div>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<div class="form-group mb-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ names.ocupacion }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in occupations" :key="option.id" @click="occupation(option)">{{ option.name }}</div>
								</base-dropdown>							
							</div>
						</div>
						
						<div class="col-sm-12 col-md-1 pr-md-0">
							<div class="form-group mb-0">
								<base-input placeholder="Nro. historia"
											class="input-group-alternative"
											alternative=""
											addon-right-icon=""
											v-model="item.historia">
								</base-input>
							</div>
						</div>
						<div class="col-sm-12 col-md-1 pr-md-0">
							<div class="form-group mb-0">
								<base-dropdown>
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown sexo">
										{{ names.sexo }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in genders" :key="option.id" @click="gender(option)">{{ option.name }}</div>
									
								</base-dropdown>							
							</div>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<div class="form-group mb-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ names.escolaridad }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in scholarships" :key="option.id" @click="scholarship(option)">{{ option.name}}</div>
								</base-dropdown>							
							</div>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<div class="form-group mb-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ names.vacunas }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in vaccinations" :key="option.id" @click="vaccination(option)">{{ option.name }}</div>
								</base-dropdown>							
							</div>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<div class="form-group mb-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ names.bucal }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in orals" :key="option.id" @click="oral_health(option)">{{ option.name }}</div>
								</base-dropdown>							
							</div>
						</div>
						<div class="col-sm-12 col-md-4 pr-md-0">
							<div class="form-group mb-0">
								<textarea class="form-control pb-0" id="exampleFormControlTextarea1" rows="1" placeholder="Riesgo, enfermemdad o discapacidad ..."  v-model="item.observacion"></textarea>							
							</div>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<div class="form-group mb-0">
								<base-input placeholder="Nro. cédula"
											class="input-group-alternative"
											alternative=""
											v-model="item.cedula">
								</base-input>
							</div>
						</div>
						<div class="col-sm-12 d-flex justify-content-end">
							<base-button type="primary" @click="addItem">Agregar</base-button>
						</div>
					</div>	
				</div>	
			</div>
        </base-header>
        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <base-table :columns="columns"
								:data="data"
								type="striped"
                    >
					</base-table>
                </div>
                <div class="row justify-content">
					<div class="col">
						<base-button type="primary" @click="modal = true">Guardar</base-button>
					</div>
					
                </div>
            </div>
        </div>
        <modal :show.sync="sinid"
               body-classes="p-0"
               modal-classes="modal-dialog-centered modal-sm">
            <card type="secondary" shadow
                  header-classes="bg-white pb-5"
                  body-classes="px-lg-5 py-lg-5"
                  class="border-0">
                
                <template>
                    <form role="form">
						<div class="row">
							<h5 class="py-2 pr-2 text-center">Ingrese el numero de cedula del jefe de familia</h5>
						</div>
						
						
						
                        <base-input alternative
                                    class="mb-3"
                                    placeholder="Nro. de cédula"
                                    addon-left-icon="ni ni-single-02"
                                 
                                    v-model="ficha">
                        </base-input>
                                             
                       
                        <div class="text-center">
                            <base-button type="primary" class="my-4" >Procesar</base-button>
                        </div>
                    </form>
                </template>
            </card>
        </modal>
        <modal :show.sync="embarazo"
               body-classes="p-0"
               type="notice"
               modal-classes="modal-dialog-centered modal-sm">
            <card type="secondary" shadow
                  header-classes="bg-white pb-5"
                  body-classes="px-lg-5 py-lg-5"
                  class="border-0">
                
                <template>
                    <form role="form">
						<div class="row">
							<h5 class="py-2 pr-2">¿Está embarazada?</h5><base-switch v-model="item.embarazo"></base-switch>
						</div>
						
						
						<base-input label="Ult. periodo" addon-left-icon="ni ni-calendar-grid-58">
							<flat-picker slot-scope="{focus, blur}"
										@on-open="focus"
										@on-close="blur"
										:config="{allowInput: true}"
										class="form-control datepicker"
										:disabled="!item.embarazo"
										v-model="item.menstruación">
							</flat-picker>
						</base-input>
						<base-input label="Fecha de parto" addon-left-icon="ni ni-calendar-grid-58">
							<flat-picker slot-scope="{focus, blur}"
										@on-open="focus"
										@on-close="blur"
										:config="{allowInput: true}"
										class="form-control datepicker"
										:disabled="!item.embarazo"
										v-model="item.parto">
							</flat-picker>
						</base-input>
                        <base-input alternative
                                    class="mb-3"
                                    placeholder="Semanas de gestación"
                                    addon-left-icon="ni ni-email-83"
                                    :disabled="!item.embarazo"
                                    v-model="item.gestacion">
                        </base-input>
                        <div>Dosis de vacunación</div>
							<base-checkbox class="mb-3" @click="dosis('Primera')" :disabled="!item.embarazo">
								Primera
							</base-checkbox>
							<base-checkbox class="mb-3" @click="dosis('Segunda')" :disabled="!item.embarazo">
								Segunda
							</base-checkbox>
							<base-checkbox class="mb-3" @click="dosis('Refuerzo')" :disabled="!item.embarazo">
								Refuerzo
							</base-checkbox>

						<div>Antecedentes gineco-obstetricos</div>
							<base-checkbox class="mb-3" @click="anterior('Gestas')" :disabled="!item.embarazo">
								Gestas
							</base-checkbox>
							<base-checkbox class="mb-3" @click="anterior('Partos')" :disabled="!item.embarazo">
								Partos
							</base-checkbox>
							<base-checkbox class="mb-3" @click="anterior('Abortos')" :disabled="!item.embarazo">
								Abortos
							</base-checkbox>
							<base-checkbox class="mb-3" @click="anterior('Cesareas')" :disabled="!item.embarazo">
								Cesáreas
							</base-checkbox>
							<textarea class="form-control pb-0" id="exampleFormControlTextarea1" rows="3" placeholder="Antecedentes patológicos obstetricos ..." v-model="item.explicacion" :disabled="!item.embarazo" ></textarea>
                       
                       
                        <div class="text-center">
                            <base-button type="primary" class="my-4" @click="next">Agregar</base-button>
                        </div>
                    </form>
                </template>
            </card>
        </modal>
        <modal :show.sync="modal"
               body-classes="p-0"
               modal-classes="modal-dialog-centered modal-sm">
            <card type="secondary" shadow
                  header-classes="bg-white pb-5"
                  body-classes="px-lg-5 py-lg-5"
                  class="border-0">
                
                <template slot="header">
                <h5 class="modal-title">Confirmación</h5>	
                </template>
				<h4 class="text-center">¿Está seguro de la información que va a anexar?</h4>
                <template slot="footer" class="align-center">
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

import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
	name: 'members',
	components: {flatPicker},
	data() {
		return {
			modal:false,
			success: false,
			embarazo: false,
			sinid: false,
			ficha: '',
			names: {
				nombre: '',
				parentesco:'Parentesco',
				nacimiento:'2018-07-17',
				ocupacion:'Ocupación',
				sexo:'Sexo',
				escolaridad: 'Escolaridad',
				vacunas: 'Vacunas',
				bucal: 'Salud bucal',
				cedula:'',
				historia: ''
			},
			item: {
				nombre:'',
				parentesco:'Parentesco',
				nacimiento:'',
				ocupacion:'Ocupación',
				sexo:'Sexo',
				escolaridad: 'Escolaridad',
				vacunas: 'Vacunas',
				bucal: 'Salud bucal',
				historia: '',
				observacion: '',
				cedula:'',
				embarazo: false,
				menstruación: '',
				parto: '',
				gestacion: '',
				dosis: '',
				antecedentes: '',
				explicacion: ''			},
			relations: [
				{id: 1, name:'Padre'},
				{id: 2, name:'Madre'},
				{id: 4, name:'Esposo/a'},
				{id: 5, name:'Hijo/a'},
				{id: 6, name:'Jefe de familia'}
			],
			occupations: [
				{id: 1, name:'Ingeniero'},
				{id: 2, name:'Licenciado'},
				{id: 3, name:'Otro'}
			],
			genders: [
				{id: 1, name:'Masculino'},
				{id: 2, name:'Femenino'},
			],
			scholarships: [
				{id: 1, name:'Sin estudios'},
				{id: 2, name:'Básica'},
				{id: 3, name:'Bachiller'},
				{id: 4, name:'Superior'},
				{id: 5, name:'Especialidad'},
			],
			vaccinations: [
				{id: 0, name:'Si'},
				{id: 1, name:'No'},
			],
			orals: [
				{id: 0, name:'Si'},
				{id: 1, name:'No'},
			],
			columns: [
				'Grupo',
				'Nombre',
				'Parentesco',
				'Nacimiento',
				'Ocupacion',
				'Sexo',
				'Historia',
				'Cedula',
			],
			data: [],
			bd: []
		}
	},
	mounted() {
		this.item.nombre = this.$route.params.chief;
		this.item.parentesco = 6;
		this.names.nombre = this.$route.params.chief;
		this.names.parentesco = 'Jefe de Familia';

		
	},
	methods: {
		clear() {
			this.names = {
				nombre:'',
				parentesco:'Parentesco',
				nacimiento:'',
				ocupacion:'Ocupación',
				sexo:'Sexo',
				escolaridad: 'Escolaridad',
				vacunas: 'Vacunas',
				bucal: 'Salud bucal',
				historia:'',
				cedula:''
			};
			this.item = {
				jefe:'',
				nombre:'',
				parentesco:'',
				nacimiento:'',
				ocupacion:'',
				sexo:'',
				escolaridad: '',
				vacunas: '',
				bucal: '',
				historia: '',
				observacion: '',
				cedula:'',
				embarazo: false,
				menstruación: '',
				parto: '',
				gestacion: '',
				dosis: '',
				antecedentes: '',
				explicacion: ''	
			};
		},
		addItem() {
			if (this.names.sexo == 'F')
				this.embarazo = true;
			else {
				this.next();
			}
			
		},
		next() {
			this.item.jefe = this.$route.params.id
			this.names.nombre = this.item.nombre;
			this.names.historia = this.item.historia;
			this.names.cedula = this.item.cedula;
			this.names.nacimiento = this.item.nacimiento;
			this.data.push(this.names);
			this.bd.push(this.item);



			this.embarazo = false;
			this.clear();
		},
		send() {
			this.modal= false;
			this.$store.commit('familiares', this.data);
			this.success = true;
			setTimeout(this.hidden, 1000);
			setTimeout(this.siguiente, 2000);
			this.data = [];
			this.bd = [];
			
		},
		siguiente() {
			this.$router.push({name: 'mortalidad familiar'})
		},
		hidden() {
			this.success = false;
		},
		relationship(option) {
			this.names.parentesco = option.name;
			this.item.parentesco = option.id;
		},
		occupation(option) {
			this.names.ocupacion = option.name;
			this.item.ocupacion = option.id;
		},
		gender(option) {
			this.names.sexo = option.name.substring(0,1);
			this.item.sexo = option.id;
		},
		scholarship(option) {
			this.names.escolaridad = option.name;
			this.item.escolaridad = option.id;
		},
		vaccination(option) {
			this.names.vacunas = option.name;
			this.item.vacunas = option.id;
		},
		oral_health(option) {
			this.names.bucal = option.name;
			this.item.bucal = option.id;
		},
		dosis(option) {
			this.item.dosis = option;
		},
		anterior(option) {
			this.item.antecedentes = option;
		}
	},
	computed: {
		
	}
};
	
</script>

<style>
.total-dropdown {
	width: 100%;
}
.col-ms-6 {
	padding-right: 0;
}
.form-control-label {
	width: 100px;
}
.embarazo {

}
.sexo {
	padding-right: 8px;
padding-left: 8px;
margin-right: 0px;
}
</style>

