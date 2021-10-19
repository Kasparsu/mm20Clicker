<template>
  
  <section class="section">
    <button class="boost1" @click="[ ClicksBoost1(), clicks -= 300 ]"  @click.prevent="playSound('http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a')">I'm bad at clickers</button>
        <button class="button is-warning is-large" @click="[ clicks++ ]"  @click.prevent="
        playSound('http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a')">
        <img src="../assets/coin-pound.png" alt="dog" width="200" height="200"></button>
            
            

        <h5 class="is-size-2">Coin 收刺猬 COLLECT<img src="../assets/mehike.png" alt="#1" width="40" height="50"></h5>  
        <h4 class="is-size-4">You have {{displayClicks}} coins!</h4>  
        <h4 class="is-size-4">You gain {{displayCps}} coins per second!</h4>  
        <auto-click 
        v-for="(auto,index) in autoClickers"
        :key="index"
        :name="auto.name"
        :cps="auto.cps"
        :cost="auto.cost"
        :index="index"
        :clicks="clicks"
        @clicked="autoClick">
        </auto-click>

        
        <click-boost
        v-for="(auto,index) in ClickBoosters"
        :key="index"
        :index="index"
        :clicks="clicks"
        @clicked="ClickBoost">
        </click-boost>
        
  </section>

</template>

<script>

 
import AutoClick from './AutoClick.vue';
import ClickBoost from './ClickBoost.vue';
export default {
components: {  AutoClick, ClickBoost },
    mounted(){
        setInterval(()=>{
            this.clicks += this.cps;
        },1000);
    },

    data(){
        return{
            clicks: 400,
            cps: 0,
            cost: 10,

            autoClickers:[
                {name: 'Boost', cost: 10, cps:0.1},
                {name: 'Coin trickle', cost: 100, cps:1.25},
                {name: 'Mining', cost: 700, cps:100},
                {name: 'Bank', cost: 1200, cps:200},
                {name: 'Factory', cost: 2000, cps:500},
                {name: 'Factory 2', cost: 30000, cps:500},
                {name: 'Factory 3', cost: 50000, cps:500},

            ],
        }
    },
    methods: {
        autoClick(index){
                this.clicks -= this.autoClickers[index].cost;
                this.cps += this.autoClickers[index].cps;
                this.autoClickers[index].cost += Math.ceil(this.autoClickers[index].cost/10);
         },
          
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },

    
ClicksBoost1(){
 

let boostTimer = setInterval(() => 
this.cps += 30, 100);
// const boostbtn = document.getElementsByClass("boost1");
// // boostbtn.disabled = true; boost1.disabled = false ––> 


// stop run
setTimeout(() => { clearInterval(boostTimer), this.cps -= 900; }, 3000);
  
  }
  },



            



    computed: {
        displayClicks(){
            return this.clicks.toFixed(1);

        },
                displayCps(){
            return this.cps.toFixed(1);
        }
},


    }

</script>

<style>

.boost1{
  left: 20px;
   top: -95px;
   height: 45px;
   width: 240px;
   position: relative;
   background:crimson;
   color: blue;
   font-size: 19px;
   }
.boost1:disabled{
  opacity: 30%;
  background: red;
}


.button.is-warning.is-large {
  border-radius: 50%;
  padding: 150px 50px;
  position: relative;
  top: 60px;
  left: 25%;
  cursor: url("../assets/coinpile.png"), auto;	
}

.button.is-warning.is-large:active {
  border-radius: 50%;
  padding: 150px 53px;
  position: relative;
  top: 60px;
  left: 25%;
  cursor: url("../assets/coinpile.png"), auto;  

}
h4.is-size-4{
    left:20px;
    bottom:340px;
    position: relative;
    color:rgb(0, 0, 255);
    border: 2px solid rgb(231, 198, 198);
    margin-top:5px;
    
}
h5.is-size-2{
    top:2px;
    position:absolute;
    color:red;
}

.coins{
    width:20px;
    height:20px;
    background: url("../assets/coin-pound.png")
}

@keyframes mover {
  0% { top: 0; left: 0; }
  30% { top: 50px; }
  68%, 72% { left: 50px; }
  100% { top: 100px; left: 100%; }
}
</style>