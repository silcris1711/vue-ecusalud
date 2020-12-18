<template>
	<div>
	<base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
		<div class="row">
			<div class="col-sm-12">
				<div class="row">
					<div class="col-sm-12 col-md-4 pr-md-0">
						<base-input placeholder="Nombre"
									class="input-group-alternative"
									alternative=""
									addon-right-icon="ni ni-single-02"
									v-model="item.nombre">
						</base-input>
					</div>
					<div class="col-sm-12 col-md-2 pr-md-0">
						<base-dropdown class="total-dropdown">
							<base-button slot="title" type="secondary" class="dropdown-toggle total-dropdown">
								{{ names.parentesco }}
							</base-button>
							<div class="dropdown-item" v-for="(option) in relations" :key="option.id" @click="relationship(option)">{{ option.name }}</div>
						</base-dropdown>
					</div>
					<div class="col-sm-12 col-md-2 pr-md-0">
						<base-input placeholder="Edad al fallecer"
									class="input-group-alternative"
									alternative=""
									v-model="item.edad">
						</base-input>
					</div>
					<div class="col-sm-12 col-md-4 pr-md-0">
						<div class="form-group mb-0">
							<textarea class="form-control pb-0" id="exampleFormControlTextarea1" rows="1" placeholder="Causa ..."  v-model="item.causa"></textarea>							
						</div>
					</div>
					<div class="col-sm-12 d-flex justify-content-end pr-md-0">
						<base-button type="primary" @click="addItem" >Agregar</base-button>
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
							type="striped">
				</base-table>
			</div>
			<div class="row justify-content">
					<div class="col-sm-12">
						<base-button type="primary" @click="modal = true">Guardar</base-button>
					</div>
					
                </div>
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
	name: 'mortalidad',
	data() {
		return {
			modal: false,
			names: {
				parentesco: 'Parantesco'
			},
			item: {
				nombre: '',
				parentesco: 'Parentesco',
				edad: '',
				causa: ''
			},
			relations: [
				{id: 1, name:'Padre'},
				{id: 2, name:'Madre'},
				{id: 3, name:'Hijo/a'},
			],
			columns: [
				'Nombre',
				'Parentesco',
				'Edad',
				'Causa',
			],
			data: [],
			bd: []
		}
	},
	methods: {
		clear() {
			this.item = {
				personId: '',
				nombre:'',
				parentesco:'',
				edad:'',
				causa: '',
			}
			this.names = {
				parentesco: 'Parentesco',
				nombre:'',
				edad:'',
				causa: '',
			}
		},
		addItem() {
			this.names.nombre = this.item.nombre;
			this.names.edad = this.item.edad;
			this.names.causa = this.item.causa;
			this.item.personId = this.$route.params.id;

			this.bd.push(this.item)
			this.data.push(this.names);
			this.clear();
			
			
		},
		send() {

			this.modal= false;
			this.$store.commit('defunciones', this.data)
			this.success = true;
			setTimeout(this.hidden, 1000);
			setTimeout(this.siguiente, 2000);
			this.data = [];
			this.bd = [];
		
		},
		siguiente() {
			this.$router.push({name: 'riesgo familiar'})
		},
		hidden() {
			this.success = false;
		},
		relationship(option) {
			this.names.parentesco = option.name
			this.item.parentesco = option.name;
		},
		
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