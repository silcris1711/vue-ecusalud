<template>
	<div>
	<base-header type="gradient-success" class="pb-2 pt-5 pt-md-8">
		<tabs fill class="flex-column flex-md-row">
			<card shadow>
				<tab-pane>
					<span slot="title">
						<i class="ni ni-cloud-upload-96"></i>
						ACTIVIDADES PROGRAMADAS
					</span>
					<div>
						<div class="row tag-content">
							<div class="col-sm-12 py-2">
								<textarea class="form-control pb-0" id="exampleFormControlTextarea1" rows="3" placeholder="Compromiso de la familia ..." v-model="item.familia"></textarea>
								
							</div>
							<div class="col-sm-12 py-2">
								<textarea class="form-control pb-0" id="exampleFormControlTextarea1" rows="3" placeholder="Compromiso del equipo de salud ..." v-model="item.sanitarios"></textarea>
								
							</div>
							
							
						</div>
						<div class="row d-flex justify-content-end">
							<base-button type="primary" @click="addItem(item)">Agregar</base-button>

						</div>
					</div>
				</tab-pane>

				<tab-pane>
					<span slot="title">
						<i class="ni ni-cloud-upload-96"></i>
						EVOLUCIÓN DE CUMPLIMIENTO
					</span>
					<div>
						<div class="row tag-content">
							<div class="col-sm-2">
								<base-dropdown class="total-dropdown">
									<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
										{{ response.cumplimiento }}
									</base-button>
									<div class="dropdown-item" v-for="(option) in options" :key="option.id" @click="cumplimiento(option.name)">{{ option.name }}</div>
								</base-dropdown>							
							</div>
							<div class="col-sm-10">
								<div class="col-sm-12 py-2">
								<textarea class="form-control pb-0" id="exampleFormControlTextarea1" rows="3" placeholder="Causa de incumplimiento y observaciones ..." v-model="response.causa"></textarea>
								
							</div>
							<div class="col-sm-12 col-md-1">
								<base-button type="primary" @click="addResponse(response)">Agregar</base-button>
							</div>
							
								
							</div>
						</div>
					</div>
				</tab-pane>
			</card>
		</tabs>
	</base-header>
	<div class="container-fluid mt--7">
		<div class="row">
			<div class="col">
				<base-table :columns="columns"
							:data="data"
							type="striped">

				</base-table>
			</div>
		</div>
		<div class="row d-flex justify-content-end">
			<base-button type="primary" @click="modal = true">Guardar</base-button>
		</div>
	</div>
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
	</div>
</template>

<script>
export default {
	name: 'evolucion',
	data() {
		return {
			modal: false,
			success: false,
			item: {
				familia: '',
				sanitarios: '',
				cumplimiento: '',
				causa: ''
			},
			response: {
				cumplimiento: 'Cumplimiento',
				causa: ''
			},
			options: [
				{ id: 1, name: 'Si cumplio'},
				{ id: 2, name: 'No cumplio'},
				{ id: 3, name: 'Parcial'},
			],
			columns: [
				'Familia',
				'Sanitarios',
				'Cumplimiento',
				'Causa',
			],
			data: []

		}
	},
	methods: {
		clear() {
			this.item = {
				familia: '',
				equipo: '',
				cumplimiento: '',
				causa: ''
			}
		},
		clearResponse() {
			this.response = {
				cumplimiento: 'Cumplimiento',
				causa: '',
			}
		},
		cumplimiento(option) {
			this.response.cumplimiento = option;
		},
		addItem(item) {
			this.data.push(item);
			this.clear();	
		},
		addResponse(response) {
			for (let i = 0; i < this.data.length; i++) {
				console.log(this.data[i].cumplimiento);
				if (this.data[i].cumplimiento == '') {
					this.data[i].cumplimiento = response.cumplimiento;
					this.data[i].causa = response.causa;
					break;
				}
			}
			this.clearResponse();

		},
		send() {

			this.modal= false;
			this.$store.commit('cambios', this.data)
			this.success = true;
			setTimeout(this.hidden, 1000);
			setTimeout(this.siguiente, 2000);
			this.data = [];
			this.bd = [];
		
		},
		hidden() {
			this.success = false;
		},
		siguiente() {
			this.$router.push({name: 'resultados'})
		},
	}

};
</script>

<style>
.col {
	margin-top: 100px;
}
</style>