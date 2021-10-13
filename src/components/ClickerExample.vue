<template>
  <section class="section">
        <button class="button is-danger" @click="addClicks"></button>
       <button class="button is-danger" @click="clicks+=helpingHand">Click me!</button>
        <h4 class="is-size-4">You have {{displayClicks}} clicks!</h4>
        <h5 class="is-size-8">Your current income is {{cps}}</h5>  

        <auto-click 
        v-for="(auto,index) in autoClickers"
        :key="index"
        :name="auto.name"
        :cps="auto.cps"
        :cost="auto.cost"
        :index="index"
        :clicks="clicks"
        @clicked="autoClick"
        >
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
            helpingHand: 1,
            clicks: 0,
            cps: 0,
            cost: 10,
            handCost: 10,
            autoClickers: [
                {name: 'A helping Hand', cost: 8, helpingHand:1},
                {name: 'Auto Click', cost: 10, cps:0.1},
                {name: 'Grandma', cost: 100, cps:1},
                {name: 'Factory', cost: 1000, cps:10},
                {name: 'Ultron', cost: 10000, cps:100},
            ]
        }
    },
    methods: {
        autoClick(index){
           this.clicks -= this.autoClickers[index].cost; 
           this.cps += this.autoClickers[index].cps;
           this.autoClickers[index].cost += Math.ceil(this.autoClickers[index].cost/7);
        },
        addClicks(){
            this.helpingHand++;
            this.clicks-=this.handCost;
            this.handCost+=2;
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

</style>