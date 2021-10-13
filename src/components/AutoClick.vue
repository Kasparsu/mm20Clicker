<template>
  <button class="glowac" @click="autoClick" :disabled="clicks<cost">
      {{name}} (ERASES {{clickrate}} extra times and ERASES +{{cps}} per second) cost: {{cost}} Erasures
  </button>
</template>

<script>
export default {
    props: ['cost', 'prestige','lodify', 'clickrate', 'diy', 'cps', 'name', 'clicks', 'index'],
    methods: {
        autoClick(){
            this.$emit('clicked', this.index);
        },
        clickRate() {
            this.$emit('clicked', this.index);
        },
    }
}
</script>

<style>
.glowac{
    height:40px;
    margin-right: 100px;
    margin-top: 10px;
    border-radius: 12px;
    background-color: red;
    color: black;
    font-family:fantasy;
    font-size:15px;
    animation-name: upgradeanim;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;
}

@keyframes upgradeanim{
  0%   {color: black; background-color:red; }
  100%  {color: red;background-color:black; }
}
.glowac:hover {
    background-color: rgb(255, 136, 0);
    animation-name: upgradeanim2;
}
@keyframes upgradeanim2 {
  0%   {color:red;}
  100%  {color:black;}
}
.glowac:disabled {
    background-color: darkgray;
    color: gray;
    animation-name: nothing;
}
</style>