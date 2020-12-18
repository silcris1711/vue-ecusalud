<template>
	<base-header type="gradient-success" class="pb-2 pt-5 pt-md-8 screen">
		<tabs fill class="flex-column flex-md-row">
			<card shadow>
				<tab-pane >
					<span slot="title">
							<i class="ni ni-cloud-upload-96"></i>
                            RIESGOS BIOLOGICOS
					</span>
					<div>
						<div class="row tag-content">
							<div class="col-sm-12">
						<div class="row py-1" v-for="(question,p) in biologicos" :key="p">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>{{ p + 1 }}</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ question.name }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ question.answer }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="bio(option, p)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ }}</div>
							</div>
						</div>						
						
					</div>

						</div>
					</div>
				</tab-pane>
				<tab-pane>
					<span slot="title">
							<i class="ni ni-cloud-upload-96"></i>
                            RIESGOS SANITARIOS
					</span>
					<div>
						<div class="row tag-content">
							<div class="col-sm-12">
						<div class="row py-1" v-for="(question,p) in sanitarios" :key="p">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>{{ p + 7 }}</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ question.name }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ question.answer }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="san(option, p)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ }}</div>
							</div>
						</div>						
						
					</div>

						</div>
					</div>
				</tab-pane>
				<tab-pane>
					<span slot="title">
							<i class="ni ni-cloud-upload-96"></i>
                            RIESGOS SOCIO-ECONOMICOS
					</span>
					<div>
						<div class="row tag-content">
							<div class="col-sm-12">
						<div class="row py-1" v-for="(question,p) in economicos" :key="p">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>{{ p + 12 }}</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ question.name }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ question.answer }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="eco(option, p)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ }}</div>
							</div>
						</div>						
						
					</div>

						</div>
					</div>
				</tab-pane>

				

				
			</card>
		</tabs>
		<div class="row">
			<div class="col-sm-12 h2 text-center">
				Total: {{ total }}
			</div>
			<div class="col-sm-12 text-center">
				<base-button type="primary" @click="modal = true">Guardar</base-button>
			</div>
		</div>
		<modal :show.sync="success"
               body-classes="p-0"
               modal-classes="modal-dialog-centered modal-sm">
               <base-alert type="success">
					<strong>Éxito!</strong> Información guardada
				</base-alert>
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
	</base-header>
</template>

<script>

export default {
	name: 'preguntas',
	data() {
		return {
			modal: false,
			success: false,
			valorguardado: 0,
			data: [],
			resultados: {
				id: '',
				responsable: '',
				valortotal: 0,
				encuesta: []
			},
			
				
				biologicos: [
					{ id: 1, name: 'Personas con vacunación incompleta', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 2, name: 'Personas con discapacidad', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 3, name: 'Personas con malnutrición', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 5, name: 'Personas con enfermedad de impacto', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 7, name: 'Embarazadas con problemas', answer: 'Pendiente', value: 0},
					{ id: 8, name: 'Personas con problemas mentales',  answer: 'Pendiente', value: 0, answerid: ''},
				]
				,
				
				sanitarios: [
					{ id: 9, name: 'Consumo de agua insegura' , answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 10, name: 'Mala eliminación de basura y excretas', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 11, name: 'Mala eliminación de desechos líquidos', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 12, name: 'Impacto ecológico por industrias', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 13, name: 'Animales intra domiciliarios', answer: 'Pendiente', value: 0, answerid: ''},

				]
				,
				
				economicos: [
					{ id: 14, name: 'Pobreza', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 15, name: 'Desempleo o empleo informall del jefe de familia', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 16, name: 'Analfabetismo del padre o la madre', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 17, name: 'Desestructuracion familiar', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 18, name: 'Violencia/Alcoholismo/drogadicción', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 19, name: 'Malas condiciones de la vivienda', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 20, name: 'Hacinamiento', answer: 'Pendiente', value: 0, answerid: ''}

				]
				

			,
			risks: [
				{id: 1, name: 'Sin riesgo', value: 0},
				{id: 2, name: 'Riesgo muy bajo', value: 1},
				{id: 3, name: 'Riesgo bajo', value: 2},
				{id: 4, name: 'Riesgo moderado', value: 3},
				{id: 5, name: 'Riesgo alto', value: 4}
			]
		}
	},
	methods: {
		clear() {
			this.item = {
				riesgo:'Pendiente'
			};
		},
		send() {
			this.modal= false;
			this.$store.commit('valoracion', this.total);
				this.success = true;
				

			for (var i = 0; i < this.biologicos.length; i++) {
				this.biologicos[i].answer = 'Pendiente'	;
				this.biologicos[i].value = 0;	
			}

			this.sanitarios = [
					{ id: 9, name: 'Consumo de agua insegura' , answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 10, name: 'Mala eliminación de basura y excretas', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 11, name: 'Mala eliminación de desechos líquidos', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 12, name: 'Impacto ecológico por industrias', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 13, name: 'Animales intra domiciliarios', answer: 'Pendiente', value: 0, answerid: ''},

				]

			this.economicos = [
					{ id: 14, name: 'Pobreza', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 15, name: 'Desempleo o empleo informall del jefe de familia', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 16, name: 'Analfabetismo del padre o la madre', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 17, name: 'Desestructuracion familiar', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 18, name: 'Violencia/Alcoholismo/drogadicción', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 19, name: 'Malas condiciones de la vivienda', answer: 'Pendiente', value: 0, answerid: ''},
					{ id: 20, name: 'Hacinamiento', answer: 'Pendiente', value: 0, answerid: ''}

				]

			setTimeout(this.hidden, 1000);
			setTimeout(this.siguiente, 2000);
		},
		siguiente() {
			this.$router.push({name: 'evolucion familiar'})
		},
		hidden() {
			this.success = false;
		},
		bio(option, p) {
			this.biologicos[p].answer = option.name;
			this.biologicos[p].value = option.value;
			this.biologicos[p].answerid = option.id;
		},
		san(option, p) {
			this.sanitarios[p].answer = option.name;
			this.sanitarios[p].value = option.value;
			this.sanitarios[p].answerid = option.id;
		},
		eco(option, p) {
			this.economicos[p].answer = option.name;
			this.economicos[p].value = option.value;
			this.economicos[p].answerid = option.id;
		},
		
	},
	computed: {
		total() {
			let cont =0;
			for (var i = 0; i < this.biologicos.length; i++) {
				cont += this.biologicos[i].value
			}
			for (var j = 0; j < this.sanitarios.length; j++) {
				cont += this.sanitarios[j].value
			}
			for (var k = 0; k < this.economicos.length; k++) {
				cont += this.economicos[k].value
			}
			
			return cont;
		}
	}
};
</script>

<style>
.screen {
	height: 100vh;
}

.shadow {
	background: transparent;
}
</style>

