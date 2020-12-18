<template>
  <card class="card-stats" :show-footer-line="true">
    <div class="row">
      <img :src=image alt="Main menu" class="tamaño">
     
      <div class="col">
        <slot>
          <h5 class="card-title text-uppercase text-muted mb-0 text-center" v-if="title">{{title}}</h5>
          <h6 class="h2 font-weight-bold mb-0 text-center" v-if="subTitle">{{subTitle}}</h6>
        </slot>
      </div>

      <div class="col-auto" v-if="$slots.icon || icon">
        <slot name="icon">
          <div class="icon icon-shape text-white rounded-circle shadow"
               :class="[`bg-${type}`, iconClasses]">
            <i :class="icon"></i>
          </div>
        </slot>
      </div>
    </div>

    <p class="mt-3 mb-0 text-sm">
      <slot name="footer">

      </slot>
    </p>
  </card>
</template>
<script>
  import Card from './Card.vue';

  export default {
    name: 'stats-card',
    components: {
      Card
    },
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      icon: String,
      title: String,
      subTitle: String,
      iconClasses: [String, Array],
      image: String
    }
  };
</script>
<style>
.tamaño {
  width: 215px;
  height: 115px;
}
</style>
