<template>
  <button class="glowac" @click="clickRate" :disabled="clickrate <= 10 || clicks < cost">
      {{name}}  (Reduces ERASURE RATE by {{clickrate}} in exchange for +{{cps}}) ERASURES per second. Will not be available if ERASURE RATE is 10 or under.) cost: {{cost}} Erasures
  </button>
</template>

<script>
export default {
    props: ['cost', 'prestige', 'clickrate', 'diy', 'cps', 'name', 'clicks', 'index'],
    methods: {
        clickRate() {
            this.$emit('clicked', this.index);
        },
    }
}
</script>

<style>
</style>