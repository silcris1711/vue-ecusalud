import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: false,
    user: '',
    back: false,
    georeferencia: {},
    calificacion: 0,
    familia: [],
    mortalidad: [],
    evolucion: [],
  },
  mutations: {
    signin(state, user) {
      state.auth = true;
      state.user = user;
    },
    signout(state) {
      state.auth = false;
    },
    recoil (state, back) {
      state.back = back;
    },
    referenciar(state, user) {
      state.georeferencia = user;
    },
    familiares(state, family) {
      state.familia = family;
    },
    defunciones(state, fallecidos) {
      state.mortalidad = fallecidos;
    },
    cambios(state, diferencias) {
      state.evolucion = diferencias;
    },
    valoracion(state, valor) {
      state.calificacion = valor;
    }
  },
  actions: {
  },
  modules: {
  }
})
