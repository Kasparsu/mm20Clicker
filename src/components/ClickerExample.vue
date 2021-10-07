<template>
  
  <section class="section">

        
        <button class="button is-warning is-large" @click="clicks++"><img src="https://baconmockup.com/100/100"></button>
        <h4 class="is-size-4">You have {{displayClicks}} coins!</h4>  
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
                {name: 'Income boost', cost: 10, cps:0.1},
                {name: 'Mining', cost: 100, cps:1},
                {name: 'Coin trickle', cost: 700, cps:1.25},
                {name: 'Bank', cost: 1200, cps:7},
                

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
  border-radius: 50%;
  padding: 150px 150px;
  margin: 0;
  position: relative;
  top: 80px;
  left: 40%;
  cursor: url("https://previews.dropbox.com/p/thumb/ABR1ciUSqke541wxgG1-f3VsBBEld3PLXWI_O8aKsF2_6vjItufldPNNRJ3EEuVE3Palwe_dQquWRM2NLf9QdR36VFbgk9xEwqOYeDxOXOV0qqHk2rS8adl3k83HkRuMYrpIiyvCrhv5KZSGkobM0jJBV_D7XorEuOwl_9gl8mTRKLdUWec_PAqqDTqnLwFnB3V5kVGQGymLUBpML4-OjujY0krnsdkpyAxFrYT70LpiAgvMFMBnS3QI5vQ1ZyrETy1YRfpU5TyCyYv78I0tfFnAgqg466_z6IloBq_uSTXQQkLqyr7hX3sI-1U4VkeNGvtqzhm1W_S4RjL4-5sPqHMvAz7J_J9DCPdaNlzicNuXFw/p.png?fv_content=true&size_mode=5"), auto;	

}
h4.is-size-4{
    left:20px;
    bottom:300px;
    position: relative;
    color:blue;
}

</style>