<template>
  
<button class="boosts" @click.prevent="playSound('http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3')" 
@click="clickBoost" :disabled="clicks<cost">{{name}} ({{cps}}) {{cost}} coins</button>



</template>

<script>

export default {
    props: ['cost', 'cps', 'name', 'clicks', 'index'],
    methods: {
        clickBoost(){
            this.$emit('clicked', this.index);


        },






            playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }

















}
}
</script>

<style>
.boosts{
    border-radius: 8px;
    padding: 15px;
    font-size: 22px;
    margin-top: 50px;
    margin-bottom: 0px;
    margin-left:15px;
    color:rgb(120, 0, 240);
    background-color: rgb(238, 158, 104);
    border: 4px dotted #ff0000; 
    cursor: pointer;
}
.boosts:disabled{
background: #dddddd;
opacity:50%;
cursor: not-allowed; 
    }

</style>