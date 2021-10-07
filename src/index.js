
let Vue = require('vue/dist/vue.common.dev');
require('bulma')
// '' ""
//const App = require('./components/App.vue');
import App from './components/App.vue';
Vue.component('app', App);
new Vue({
    el: '#app', 

    
   
    // methods: {
    //     clicked(){
    //         if(this.message.trim() != ''){  
    //         this.items.push({name: this.message, isDone: false, id: this.items.length})
    //         }
    //         this.message = '';
    //     }
    // },
    // computed: {
    //     doneItems(){
    //         return this.items.filter(item => item.isDone);
    //     },
    //     notDoneItems(){
    //         return this.items.filter(item => !item.isDone);
    //     }
    // }
    });










// let input = document.getElementById("input");
// let text = document.getElementById("text");
// input.addEventListener("input", (event)=>{
//     text.innerHTML = input.value;
// })



        

