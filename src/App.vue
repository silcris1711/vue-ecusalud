<template>
  <div id="app">
    <notifications></notifications>
    <router-view/>
  </div>
</template>

<script>
export default {
	name: 'App',
	data: () => ({
	}),
	beforeCreate: function () {
		if (!this.auth) this.$router.push({ name: 'login'});
	},
	computed: {
		auth () {
			return this.$store.state.auth;
		}
	}

};
</script>

<style>
html {
	font-size: 16px;
}

.bg-gradient-success {
    background: linear-gradient(87deg, #40e0d0 0, #87ceeb 100%);
}
</style>
