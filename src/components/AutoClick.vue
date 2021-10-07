<template>
  
<button class="upgrades" @click="autoClick" :disabled="clicks<cost">{{name}} ({{cps}} ) 
    0.1 coin trickle{{cost}}</button>

<!-- <img src="bank_icon.png"> -->


</template>

<script>

export default {
    props: ['cost', 'cps', 'name', 'clicks', 'index'],
    methods: {
        autoClick(){
            this.$emit('clicked', this.index);
        }
    }
}
</script>

<style>
.upgrades{
    border-radius: 8px;
    padding: 15px;
    font-size: 18px;
    margin-top: 240px;
    margin-bottom: 300px;
    margin-left:15px;
    color:rgb(65, 34, 124);
    background-color: rgb(243, 140, 71);
    border: 2px solid #6e0044;
}
.upgrades:disabled{
background: #dddddd;
    }

</style>