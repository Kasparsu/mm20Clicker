<template>
  <section class="section">
        <button @click="do_click" @click.prevent="playSound('https://www.101soundboards.com/sounds/643197-audio-appearance.mp3')">
            <img src="https://miro.medium.com/max/1292/1*R6L2ogI6dYUEMlFZVzlnnA.png" width="200px">
            
        </button>
        <h4 class="is-size-4">You have deleted {{displayClicks}} accounts!</h4>
        <h5 class="is-size-3">You have a lot of Deleting to do!</h5>  
        <auto-click 
        v-for="(auto,index) in autoClickers"
        :key="index"
        :name="auto.name"
        :cps="auto.cps"
        :cost="auto.cost"
        :index="index"
        :clickrate="auto.clickrate"
        :summoner="summoner"
        :clicks="clicks"
        @clicked="autoClick"
        >
        </auto-click>
        <summoner
        v-for="(auto,index) in summoner"
        :key="index"
        :name="auto.name"
        :cps="auto.cps"
        :cost="auto.cost"
        :index="index"
        :clickrate="auto.clickrate"
        :summoner="summoner"
        :clicks="clicks"
        @clicked="autoClick">
        </summoner>
  </section>
</template>

<script>
import Clickrate from './Clickrate.vue';
import AutoClick from './AutoClick.vue';
export default {
  components: { Clickrate, AutoClick },
    mounted(){
        setInterval(()=>{
            this.clicks += this.cps;   
        },1000);
    },
    data(){
        return {
            clicks: 1000,
            clickrate: 1,
            cps: 0,
            cost: 10,
            autoClickers: [
                {name: 'Auto Delete', cost: 10, clickrate: 0, cps:0.1},
                {name: 'Delete Bot', cost: 100, clickrate: 0, cps:1},
                {name: 'Factory of Deleters', cost: 1000, clickrate: 0, cps:10},
                {name: 'Entire City of Deleters', cost: 10000, clickrate: 0, cps:100},
                {name: 'Entire Country of Deleters', cost: 100000, clickrate: 0, cps:1000},
                {name: 'Entire Continent of Deleters', cost: 1000000, clickrate: 0, cps:10000},
                {name: 'Entire World of Deleters', cost: 10000000, clickrate: 0, cps:100000},
                {name: 'Entire Universe of Deleters', cost: 100000000, clickrate: 0, cps:1000000},
                {name: 'Entire Multiverse of Deleters', cost: 1000000000, clickrate: 0, cps:10000000},
                {name: 'God of Deleters', cost: 10000000000, clickrate: 0, cps:100000000},
                {name: 'Mother of God of Deleters', cost: 100000000000, clickrate: 0, cps:1000000000},
                {name: 'Your Angry Mother', cost: 1000000000000, clickrate: 0, cps:10000000000},
                {name: 'Stronger Clicks', cost: 100, clickrate: 0.2, cps: 0.2},
                {name: 'Summoner style', cost: 100, clickrate: -0.5, cps: 3}
                ],
        }
    },
    methods: {
        autoClick(index){
           this.clicks -= this.autoClickers[index].cost; 
           this.cps += this.autoClickers[index].cps;
           this.clickrate += this.autoClickers[index].clickrate;
           this.autoClickers[index].cost += Math.ceil(this.autoClickers[index].cost/7);
        },
        do_click: function() {
           this.clicks += this.clickrate;
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
h4.is-size-4{
    top:1px;
    position: relative;
    color:rgb(0, 0, 255);
    border: 2px solid rgb(231, 198, 198);
    
}
h5.is-size-3{
    top:100px;
    position:absolute;
    color:red;
}
</style>