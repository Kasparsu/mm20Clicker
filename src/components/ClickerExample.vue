<template>
  
  <section class="section">

        <button class="button is-warning is-large" @click="clicks++" ><img src="https://previews.dropbox.com/p/thumb/ABQZgIDq4djH3Kv6Qg2qAJhyEZtoMabSCty3GlKHymEHaWG8Iyrz4FlsJLljW96kYfYgljaZvlfejm_Yv4MjgJ7vAObw0s6VUY_Y0bruxhCJJE17_40ar7_oRMSFI8dAHDDP0EHZXjKt6bow_ijRmWvSmf-Q5iubIT-TPa5PJMjgzpJnfbs8w3t5u05f4rr6QYcfKwkYvlK7U9ar_GtZePOlpWginae3SjSTNZxx8jN3nw6nt2HhPgqT5JK2PvyxfG-CFxaO4wrJpgS4wEGcCSdEoOqBCMx-fMqUvJHbgmrZkiy6V9WBOhbJ5BV5EW39M9OcWlxAbaUvBYtG_q41mbKn7HPjgUmyYP4Vz4zrhe1LdA/p.png" alt="dog" width="200" height="200"></button>
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
            clicks: 1000,
            cps: 0,
            cost: 10,
            autoClickers:[
                {name: 'Boost', cost: 10, cps:0.1},
                {name: 'Coin trickle', cost: 100, cps:1.25},
                {name: 'Mining', cost: 700, cps:100},
                {name: 'Bank', cost: 1200, cps:400},
                

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
  padding: 150px 50px;
  position: relative;
  top: 60px;
  left: 40%;
  cursor: url("https://previews.dropbox.com/p/thumb/ABR1ciUSqke541wxgG1-f3VsBBEld3PLXWI_O8aKsF2_6vjItufldPNNRJ3EEuVE3Palwe_dQquWRM2NLf9QdR36VFbgk9xEwqOYeDxOXOV0qqHk2rS8adl3k83HkRuMYrpIiyvCrhv5KZSGkobM0jJBV_D7XorEuOwl_9gl8mTRKLdUWec_PAqqDTqnLwFnB3V5kVGQGymLUBpML4-OjujY0krnsdkpyAxFrYT70LpiAgvMFMBnS3QI5vQ1ZyrETy1YRfpU5TyCyYv78I0tfFnAgqg466_z6IloBq_uSTXQQkLqyr7hX3sI-1U4VkeNGvtqzhm1W_S4RjL4-5sPqHMvAz7J_J9DCPdaNlzicNuXFw/p.png?fv_content=true&size_mode=5"), auto;	

}
h4.is-size-4{
    left:20px;
    bottom:300px;
    position: relative;
    color:rgb(0, 0, 255);
    border: 2px solid rgb(231, 198, 198);
    
}

</style>