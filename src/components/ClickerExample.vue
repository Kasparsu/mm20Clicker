<template>
  <section class="section">
    <img @click="clicks++" src="../assets/kass.jpg" class="clickbutton">
        <h4 class="is-size-4">You have {{displayClicks}} clicks</h4>  
        <div class="upgrades"><auto-click 
        v-for="(auto,index) in autoClickers"
        :key="index"
        :name="auto.name"
        :cps="auto.cps"
        :cost="auto.cost"
        :index="index"
        :clicks="clicks"
        @clicked="autoClick">
        </auto-click></div>
  </section>
</template>

<script>

import AutoClick from './AutoClick.vue';
export default {
  components: { AutoClick },
    mounted(){
        setInterval(()=>{
            this.clicks += this.cps;   
        },1000);
    },
    data(){
        return {
            clicks: 0,
            cps: 0,
            cost: 10,
            autoClickers: [
                {name: 'Auto Click', cost: 10, cps:0.1},
                {name: 'Oranž kass', cost: 100, cps:10},
                {name: 'Valge kass', cost: 1000, cps:100},
                {name: 'Must kass', cost: 10000, cps:1000},
                {name: 'Pruun kass', cost: 100000, cps:10000},
            ]
        }
    },
    methods: {
        autoClick(index){
           this.clicks -= this.autoClickers[index].cost; 
           this.cps += this.autoClickers[index].cps;
           this.autoClickers[index].cost += Math.ceil(this.autoClickers[index].cost/7);
        }
    },
    computed: {
        displayClicks(){
            return this.clicks.toFixed(1);
        }
    }
}
</script>

<style>

    .clickbutton  {
        width:150px;
        height:150px;
        border-radius: 100%;
        position:fixed;
        top:10%;
        left:50%;
    }

    .upgrades {
        width:30%;
    }

</style>