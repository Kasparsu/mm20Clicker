<template>
  <section class="section">
        <button class="button is-danger" @click="clicks+=extraClicks">Click me!</button>
        <button class="button is-danger" @click="addextraClicks" :disabled="clicks<extraClickscost">Click Size</button>
        <h3>You have {{displayClicks}} clicks!</h3>
        <h3>You have {{cps}} passive clicks!</h3>
        <h3>Your Clicksize is {{extraClicks}}</h3> 
        <h3>Your Clicksize cost is {{extraClickscost}}</h3>  
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
            extraClicks: 1,
            cps: 0,
            extraClickscost: 10,
            autoClickers: [
                {name: 'Fraction of a chromosome', cost: 10, cps:0.1},
                {name: 'A whole chromosome', cost: 100, cps:1},
                {name: 'Handful of chromosomes', cost: 500, cps:5},
                {name: 'Pocket of chromosomes', cost: 2000, cps:20},
                {name: 'Bag of chromosomes', cost: 10000, cps:100},
                {name: 'House made of chromosomes', cost: 100000, cps:1000},
                {name: 'Chromosome bank', cost: 1000000, cps:10000},

            ],
            
        }
    
    },
        
    methods: {
        autoClick(index){
           this.clicks -= this.autoClickers[index].cost; 
           this.cps += this.autoClickers[index].cps;
           this.autoClickers[index].cost += Math.ceil(this.autoClickers[index].cost/7);
        },
        addextraClicks(){
            this.extraClicks+=0.5;
            this.clicks-=this.extraClickscost;
            this.extraClickscost+=10;
        }
    },
    computed: {
        displayClicks(){
            return this.clicks.toFixed(1);
        },

    }
}
</script>

<style>

</style>