<template>
  <section class="section">
        <button class="ERASE" @click="do_click" :disabled="clickrate <=0" width="500px">
            ERASE
        </button>
<h4 class="Delete-display">Choose an option</h4>
<div class="YourselfBTN">
        <button class="Yourself" @click="activate_yourself" :disabled="diy <=0">
            Do it yourself
        </button>
</div>

<div class="LodifyBTN">
        <button class="lodify" @click="activate_lodify" :disabled="diy <=0">
            Let others do it for you
        </button>
      </div>
        <h2 id="Warning"> Make sure you don't go below 0 ERASURE per second! </h2>
        <h1>Your ERASURE RATE is {{clickrate}}.</h1>
        <h1>Your are ERASING {{cps}} per second.</h1>
        <h4 class="Delete-display">You have ERASED {{displayClicks}} times!</h4>
        <h5 class="Delete-note">You have a lot of Erasing to do!</h5>  
        <auto-click 
        v-for="(auto,index) in autoClickers"
        :key="'auto-'+index"
        :name="auto.name"
        :cps="auto.cps"
        :cost="auto.cost"
        :index="index"
        :clickrate="auto.clickrate"
        :clicks="clicks"
        :diy="diy"
        @clicked="autoClick">
        </auto-click>
        <clickrate 
        v-for="(auto,index) in clickRates"
        :key="'rate-'+index"
        :name="auto.name"
        :cps="auto.cps"
        :cost="auto.cost"
        :index="index"
        :clickrate="auto.clickrate"
        :clicks="clicks"
        @clicked="clickRate">
        </clickrate>
  </section>
</template>

<script>
import Clickrate from './Clickrate.vue';
import AutoClick from './AutoClick.vue';
import Prestige from './Prestige.vue';
export default {

  components: {Prestige, Clickrate, AutoClick },
    mounted(){
        setInterval(()=>{
            this.clicks += this.cps;   
        },1000);
    },
    data(){
        return {
            clicks: 1000,
            clickrate: 0,
            cps: 0,
            diy: 1,
            prestige: 0,
            cost: 10,
            autoClickers: [
                {name: 'Auto Erase', cost: 10, clickrate: 0, cps:0.1},
                {name: 'Erasure Bot', cost: 100, clickrate: 0, cps:1},
                {name: 'Factory of Erasers', cost: 1000, clickrate: 0, cps:10},
                {name: 'Entire City of Erasers', cost: 10000, clickrate: 0, cps:100},
                {name: 'Entire Country of Erasers', cost: 100000, clickrate: 0, cps:1000},
                {name: 'Entire Continent of Erasers', cost: 1000000, clickrate: 0, cps:10000},
                {name: 'Entire World of Erasers', cost: 10000000, clickrate: 0, cps:100000},
                {name: 'Entire Universe of Erasers', cost: 100000000, clickrate: 0, cps:1000000},
                {name: 'Entire Multiverse of Erase', cost: 1000000000, clickrate: 0, cps:10000000},
                {name: 'Ask God to Erase', cost: 10000000000, clickrate: 0, cps:100000000},
                {name: 'Ask Mother of God to Erase', cost: 100000000000, clickrate: 0, cps:1000000000},
                {name: 'YOU', cost: 1000000000000, clickrate: 0, cps:10000000000},
                {name: 'Extra Erase', cost: 100, clickrate: 0.2, cps: 0.2},
                {name: 'The power', cost: 50, clickrate: 0.5, cps: -3},
                {name: 'The power', cost: 500, clickrate: 5, cps: -30},
                {name: 'MOVE ONTO THE NEXT', cost:1000, clickrate:1, cps: 0},
                
                ],
            clickRates: [
                {name: 'Let them do the job for you', cost: 50, clickrate: 0.2, cps: 2},
            ]
        }
    },
    methods: {
        autoClick(index){
           this.clicks -= this.autoClickers[index].cost; 
           this.cps += this.autoClickers[index].cps;
           this.clickrate += this.autoClickers[index].clickrate;
           this.autoClickers[index].cost += Math.ceil(this.autoClickers[index].cost/7);
        },
        clickRate(index){
           this.clicks -= this.autoClickers[index].cost; 
           this.cps += this.autoClickers[index].cps;
           this.clickrate -= this.autoClickers[index].clickrate;
           this.clickRates[index].cost += Math.ceil(this.clickRates[index].cost/7);
        },
        do_click(){
           this.clicks += this.clickrate;
        },
        activate_yourself() {
            this.clickrate = 3;
            this.cps = 0;
            this.diy = 0;
        },
         activate_lodify() {
            this.clickrate = 0;
            this.cps = 16;
            this.diy = 0;
        },
        Warningmsg() {
            var x = document.getElementById("myDIV");
            if (x.innerHTML === "Hello") {
             x.innerHTML = "Swapped text!";
            } else {
            x.innerHTML = "Hello";
        }
},
    },
    computed: {
        displayClicks(){
            return this.clicks.toFixed(1);
        },
    }
}
</script>

<style>
h1{
    color:red;
}
h5.Delete-note{
    top:70px;
    font-size: 50px;
    font-family: sans-serif;
    position:absolute;
    background-color:black;
    color:rgb(255, 0, 0);
    border: 7px solid rgb(0, 0, 0);
}
h4.Delete-display{
    top:1px;
    font-size: 25px;
    position: relative;
    background-color:black;
    color:red;
    border: 5px solid rgb(0, 0, 0);
    
}
.ERASE {
  height: 200px;
  width: 500px;
  text-align: center;
  font-size: 100px;
  font-family: Fantasy;
  letter-spacing: 10px;
  color:rgb(255, 136, 0);
  background-color: red;
  border: 20px solid rgb(255, 136, 0);
  position: relative;
  padding: 20px;
  animation-name: clickeranim;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

@keyframes clickeranim {
  0%   {background-color:black; left:0px; top:0px;}
  100%  {background-color:red; left:1000px; top:0px;}
}
.ERASE:hover {
  height: 200px;
  width: 500px;
  text-align: center;
  padding: 20px;
  font-size: 100px;
  background-color: transparent;
  font-family: Fantasy;
  letter-spacing: 10px;
  color:rgb(255, 0, 0);
  border: 20px solid rgb(255, 0, 0);
  position: relative;
  }
  .ERASE:active {
      color:rgb(200, 0, 0);
      border: 20px solid rgb(200, 0, 0);
      text-align: center;
      font-size: 95px;
      transform: translateY(20px);
      margin-bottom:10px;
      height: 190px;
      width: 490px;
  }
  .ERASE:disabled {
  height: 200px;
  width: 500px;
  text-align: center;
  padding: 20px;
  font-size: 100px;
  background-color: transparent;
  font-family: Fantasy;
  letter-spacing: 10px;
  background-color:rgb(173, 173, 173);
  color:gray;
  border: 20px solid gray;
  position: relative;
  animation-name: nothing;
  }
  .Yourself {
height: 50px;
width: 125px;
text-align: center;
background-color:black;
color:rgb(255, 136, 0);
border: 5px solid rgb(255, 136, 0);
font-family: Fantasy;
letter-spacing: 5px;
position:relative;
  }
  .Yourself:hover {
      color:red;
      border: 5px solid red;
  }
  .Yourself:active {
      height:45px;
      width:120px;
      font-size: 12px;
      color:rgb(200, 0, 0);
      border: 5px solid rgb(200, 0, 0);
      transform:translateY(2px);
      margin-bottom:5px;
  }
  .Yourself:disabled {
      display: none;
  }

  .lodify {
height: 50px;
width: 125px;
text-align: center;
background-color:black;
color:rgb(255, 136, 0);
border: 5px solid rgb(255, 136, 0);
font-family: Fantasy;
letter-spacing: 3px;
position:relative;
  }
  .lodify:hover {
      color:green;
      border: 5px solid green;
  }
  .lodify:active {
      height:45px;
      width:120px;
      font-size: 12px;
      color:rgb(0, 200, 0);
      border: 5px solid rgb(0, 200, 0);
      transform:translateY(2px);
      margin-bottom:5px;
  }
  .lodify:disabled {
      display: none;
  }
body {
    margin:0;
    padding:0;
    background-color:black;
}
</style>
