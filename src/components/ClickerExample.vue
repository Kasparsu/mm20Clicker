<template>
  
  <section class="section">

        
        <button class="button is-warning is-large" @click="clicks++"><img src="assets/coinpile.png"></button>
        <h4 class="is-size-4">You havehttps://baconmockup.com/50/40 {{displayClicks}} clicks!</h4>  
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

<!-- <button class="button is-red" @click="autoClick" :disabled="clicks<=9"> 0.1 coin trickle for 100 coins<img src="bank_icon.png"></button> -->







</template>

<script>


import AutoClick from './AutoClick.vue';
export default {
components: {  AutoClick },
    mounted(){
        setInterval(()=>{
            this.clicks += this.cps;

        },1000);
    },
    data(){
        return{
            clicks: 0,
            cps: 0,
            cost: 10,
            autoClickers:[
                {name: 'auto clickee', cost: 10, cps:0.1},
                {name: 'coin trickle', cost: 700, cps:1.25},
                {name: 'coin bank', cost: 1200, cps:7},

            ]
        }
    },
    methods: {
        autoClick(index){
                this.clicks -= this.autoClickers[index].cost;
                this.cps += this.autoClickers[index].cps;
                this.autoClickers[index].cost += Math.ceil(this.autoClickers[index].cost/10);
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

.button.is-warning.is-large {
  margin: 0;
  position: relative;
  top: 80px;
  left: 50%;
}
h4.is-size-4{
    top: 100px;
    position: relative;
}

</style>