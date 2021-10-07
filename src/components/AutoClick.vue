<template>
  
<button class="upgrades" @click="autoClick" :disabled="clicks<cost">{{name}} ({{cps}} cps) 
   {{cost}} coins</button>

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
    font-size: 22px;
    margin-top: 100px;
    margin-bottom: 300px;
    margin-left:15px;
    color:rgb(120, 0, 240);
    background-color: rgb(238, 158, 104);
    border: 4px dotted #6e0044; 
    cursor: pointer;
}
.upgrades:disabled{
background: #dddddd;
opacity:50%;
cursor: not-allowed; 
    }

</style>