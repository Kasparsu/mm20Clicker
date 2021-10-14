<template>
  <button class="glow button is-danger" @click="clickrate = 1, cps = 0, clicks = 0" :disabled="clickrate <= 10">
      {{name}}  (Prestige and Reset your ERASURES, ERASURE RATES and ERASES per second in exchange for increased ERASURE RATE and ERASURES per second per upgrade)
  </button>
</template>

<script>
export default {
    props: ['cost', 'prestige', 'clickrate', 'cps', 'name', 'clicks', 'index'],
    methods: {
        Pres() {
            this.$emit('clicked', this.index);
        },
    }
}
</script>

<style>
.glow{
    margin-right: 100px;
    margin-top: 10px;
    background-color: red;
    animation-name: example;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
}

@keyframes example {
  0%   {background-color:red;}
  100%  {background-color:black;}
}
</style>