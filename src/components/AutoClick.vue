<template>
  <button class="button is-danger" @click="autoClick" :disabled="clicks<cost">
      {{name}} (increases deletion per click by {{clickrate}} and {{cps}} deletes per second) cost: {{cost}} deletes
  </button>
</template>

<script>
export default {
    props: ['cost', 'clickrate', 'cps', 'name', 'clicks', 'index'],
    methods: {
        autoClick(){
            this.$emit('clicked', this.index);
        },
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