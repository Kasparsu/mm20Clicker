<template>
  <button class="button is-danger" @click="autoClick" :disabled="clickrate <= 10">
      {{name}}  (Reduces clickrate by {{clickrate}} in exchange for {{cps}}) clicks per second. Will not be available if clickrate is 10 or under.) cost: {{cost}} deletes
  </button>
</template>

<script>
export default {
    props: ['cost', 'clickrate', 'cps', 'name', 'clicks', 'index'],
    methods: {
        summoner() {
            this.$emit('clicked', this.index);
        },
    }
}
</script>

<style>
.button.is-danger{
    margin-right: 10px;
    margin-top: 10px;
}
</style>