<template>
	<div>
				<form class="">
					<div class="row">						
						<div class="col-sm-12 col-md-4 pr-md-0">
							<div class="form-group mb-0">
								<base-input placeholder="Apellidos y Nombres"
											class="input-group-alternative"
											alternative=""
											addon-right-icon="fas fa-search"
											v-model="item.nombre">
								</base-input>
							</div>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<div class="form-group mb-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ item.parentesco }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in relations" :key="option.id" @click="relationship(option.name)">{{ option.name }}</div>
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
										{{ item.ocupacion }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in occupations" :key="option.id" @click="occupation(option.name)">{{ option.name }}</div>
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
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ item.sexo }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in genders" :key="option.id" @click="gender(option.name)">{{ option.name }}</div>
									
								</base-dropdown>							
							</div>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<div class="form-group mb-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ item.escolaridad }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in scholarships" :key="option.id" @click="scholarship(option.name)">{{ option.name }}</div>
								</base-dropdown>							
							</div>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<div class="form-group mb-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ item.vacunas }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in vaccinations" :key="option.id" @click="vaccination(option.name)">{{ option.name }}</div>
								</base-dropdown>							
							</div>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<div class="form-group mb-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ item.bucal }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in orals" :key="option.id" @click="oral_health(option.name)">{{ option.name }}</div>
								</base-dropdown>							
							</div>
						</div>
						<div class="col-sm-12 col-md-4 pr-md-0">
							<div class="form-group mb-0">
								<textarea class="form-control pb-0" id="exampleFormControlTextarea1" rows="1" placeholder="Riesgo, enfermemdad o discapacidad ..."  v-model="item.his"></textarea>							
							</div>
						</div>
						<div class="col-sm-12 col-md-2 pr-md-0">
							<div class="form-group mb-0">
								<base-input placeholder="Nro. cédula"
											class="input-group-alternative"
											alternative=""
											addon-right-icon="fas fa-search"
											v-model="item.cedula">
								</base-input>
							</div>
						</div>
						<div class="col-sm-12 col-md-1 offset-md-11 pr-md-0">
							<div class="form-group mb-0">
								<base-button type="primary" @click="addItem(item)">Añadir</base-button>
							</div>
							
						</div>

					</div>

				</form>
        
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
			item: {
				nombre:'',
				parentesco:'Parentesco',
				nacimiento:'2018-07-17',
				ocupacion:'Ocupación',
				sexo:'Sexo',
				escolaridad: 'Escolaridad',
				vacunas: 'Vacunas',
				bucal: 'Salud bucal',
				historia: '',
				cedula:''
			},
			relations: [
				{id: 1, name:'Padre'},
				{id: 2, name:'Madre'},
				{id: 3, name:'Hijo/a'},
				{id: 4, name:'Jefe de familia'}
			],
			occupations: [
				{id: 1, name:'Ingeniero'},
				{id: 2, name:'Licenciado'},
				{id: 3, name:'Otro'}
			],
			genders: [
				{id: 1, name:'Masculino'},
				{id: 2, name:'Femenino'},
				{id: 3, name:'Reservado'},
			],
			scholarships: [
				{id: 1, name:'Sin estudios'},
				{id: 2, name:'Básica'},
				{id: 3, name:'Bachiller'},
				{id: 4, name:'Superior'},
				{id: 5, name:'Especialidad'},
			],
			vaccinations: [
				{id: 1, name:'Si'},
				{id: 2, name:'No'},
			],
			orals: [
				{id: 1, name:'Si'},
				{id: 2, name:'No'},
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
				'Opción'
			],
			data: []
		}
	},
	methods: {
		clear() {
			this.item = {
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
		},
		addItem(item) {
			this.data.push(item);
			this.clear();
		},
		relationship(option) {
			this.item.parentesco = option;
		},
		occupation(option) {
			this.item.ocupacion = option;
		},
		gender(option) {
			this.item.sexo = option.substring(0,1);
		},
		scholarship(option) {
			this.item.escolaridad = option;
		},
		vaccination(option) {
			this.item.vacunas = option;
		},
		oral_health(option) {
			this.item.bucal = option;
		}
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
</style>