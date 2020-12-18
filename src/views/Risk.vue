<template>
	<base-header type="gradient-success" class="pb-2 pt-5 pt-md-8 screen">
		<tabs fill class="flex-column flex-md-row">
			<card shadow>
				<tab-pane>
					<span slot="title">
							<i class="ni ni-cloud-upload-96"></i>
                            RIESGOS BIOLÓGICOS
					</span>
					<div>
						<div class="row tag-content">
							<div class="col-sm-12">
						<div class="row py-1">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>1</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ questions[0] }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ answers.answer1 }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="risk1(option)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ answers.value1 }}</div>
							</div>
						</div>	
						<div class="row py-1">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>2</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ questions[1] }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ answers.answer2 }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="risk2(option)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ answers.value2 }}</div>
							</div>
						</div>	
						<div class="row py-1">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>3</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ questions[2] }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ answers.answer3 }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="risk3(option)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ answers.value3 }}</div>
							</div>
						</div>
						<div class="row py-1">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>4</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ questions[3] }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ answers.answer4 }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="risk4(option)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ answers.value4 }}</div>
							</div>
						</div>
						<div class="row py-1">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>5</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ questions[4] }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ answers.answer5 }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="risk5(option)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ answers.value5 }}</div>
							</div>
						</div>
						<div class="row py-1">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>6</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ questions[5] }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ answers.answer6 }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="risk6(option)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ answers.value6 }}</div>
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
						<div class="row py-1">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>7</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ questions[6] }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ answers.answer7 }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="risk7(option)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ answers.value7 }}</div>
							</div>
						</div>	
						<div class="row py-1">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>8</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ questions[7] }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ answers.answer8 }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="risk8(option)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ answers.value8 }}</div>
							</div>
						</div>	
						<div class="row py-1">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>9</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ questions[8] }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ answers.answer9 }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="risk9(option)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ answers.value9 }}</div>
							</div>
						</div>
						<div class="row py-1">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>10</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ questions[9] }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ answers.answer10 }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="risk10(option)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ answers.value10 }}</div>
							</div>
						</div>
						<div class="row py-1">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>11</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ questions[10] }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ answers.answer11 }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="risk11(option)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ answers.value11 }}</div>
							</div>
						</div>
					</div>

						</div>
					</div>
				</tab-pane>

				<tab-pane>
					<span slot="title">
							<i class="ni ni-cloud-upload-96"></i>
                            RIESGOS SOCIO-ECONÓMICOS
					</span>
					<div>
						<div class="row tag-content">
							<div class="col-sm-12">
						<div class="row py-1">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>12</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ questions[11] }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ answers.answer12 }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="risk1(option)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ answers.value12 }}</div>
							</div>
						</div>	
						<div class="row py-1">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>13</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ questions[12] }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ answers.answer13 }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="risk2(option)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ answers.value13 }}</div>
							</div>
						</div>	
						<div class="row py-1">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>14</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ questions[13] }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ answers.answer14 }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="risk3(option)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ answers.value14 }}</div>
							</div>
						</div>
						<div class="row py-1">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>15</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ questions[14] }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ answers.answer15 }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="risk4(option)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ answers.value15 }}</div>
							</div>
						</div>
						<div class="row py-1">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>16</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ questions[15] }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ answers.answer16 }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="risk5(option)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ answers.value16 }}</div>
							</div>
						</div>
						<div class="row py-1">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>17</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ questions[16] }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ answers.answer17 }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="risk6(option)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ answers.value17 }}</div>
							</div>
						</div>
						<div class="row py-1">
							<div class="col-sm-1 offset-sm-2 pr-sm-0">
								<div>18</div>		
							</div>
							<div class="col-sm-4 pr-sm-0">
								<div class="text-white">{{ questions[17] }}</div>
									
							</div>
							<div class="col-sm-2 pr-sm-0">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ answers.answer18 }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in risks" :key="option.id" @click="risk6(option)">{{ option.name }}</div>
								</base-dropdown>	
							</div>
							<div class="col-sm-1 pr-sm-0">
								<div class="text-center">{{ answers.value18 }}</div>
							</div>
						</div>
					</div>
						
					</div>


					
					</div>
				</tab-pane>    
			</card>
		</tabs>
		<div class="row">
			<div class="col-sm-12 text-center">
				
			</div>
		</div>
	</base-header>
</template>

<script>
export default {
	name: 'riesgo-familiar',
	data() {
		return {
			data: [],
			answers: {
				answer1: 'Pendiente',
				answer2: 'Pendiente',
				answer3: 'Pendiente',
				answer4: 'Pendiente',
				answer5: 'Pendiente',
				answer6: 'Pendiente',
				answer7: 'Pendiente',
				answer8: 'Pendiente',
				answer9: 'Pendiente',
				answer10: 'Pendiente',
				answer11: 'Pendiente',
				answer12: 'Pendiente',
				answer13: 'Pendiente',
				answer14: 'Pendiente',
				answer15: 'Pendiente',
				answer16: 'Pendiente',
				answer17: 'Pendiente',
				answer18: 'Pendiente',
				value1: '',
				value2: '',
				value3: '',
				value4: '',
				value5: '',
				value6: '',
				value7: '',
				value8: '',
				value9: '',
				value10: '',
				value11: '',
				value12: '',
				value13: '',
				value14: '',
				value15: '',
				value16: '',
				value17: '',
				value18: '',
			},
			questions: [
				'Personas con vacunación incompleta',
				'Personas con malnutrición',
				'Personas con enfermedad de impacto',
				'Embarazadas con problemas',
				'Personas con discapacidad',
				'Personas con problemas mentales',
				'Consumo de agua insegura',
				'Mala eliminación de basura y excretas',
				'Mala eliminación de desechos líquidos',
				'Impacto ecológico por industrias',
				'Animales intra domiciliarios',
				'Pobreza',
				'Desempleo o empleo informall del jefe de familia',
				'Analfabetismo del padre o la madre',
				'Desestructuracion familiar',
				'Violencia/Alcoholismo/drogadicción',
				'Malas condiciones de la vivienda',
				'Hacinamiento'
			],
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
		risk1(option) {
			this.answers.answer1 = option.name;
			this.answers.value1 = option.value;
		},
		risk2(option) {
			this.answers.answer2 = option.name;
			this.answers.value2 = option.value;
		},
		risk3(option) {
			this.answers.answer3 = option.name;
			this.answers.value3 = option.value;
		},
		risk4(option) {
			this.answers.answer4 = option.name;
			this.answers.value4 = option.value;
		},
		risk5(option) {
			this.answers.answer5 = option.name;
			this.answers.value5 = option.value;
		},
		risk6(option) {
			this.answers.answer6 = option.name;
			this.answers.value6 = option.value;
		},
		risk7(option) {
			this.answers.answer7 = option.name;
			this.answers.value7 = option.value;
		},
		risk8(option) {
			this.answers.answer8 = option.name;
			this.answers.value8 = option.value;
		},
		risk9(option) {
			this.answers.answer9 = option.name;
			this.answers.value9 = option.value;
		},
		risk10(option) {
			this.answers.answer10 = option.name;
			this.answers.value10 = option.value;
		},
		risk11(option) {
			this.answers.answer11 = option.name;
			this.answers.value11 = option.value;
		},
		risk12(option) {
			this.answers.answer12 = option.name;
			this.answers.value12 = option.value;
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

