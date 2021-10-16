<template>
<div class="afgan">
  <h1>HELLO COMPONENT </h1>
        <input type="text" v-model="message" @keyup.enter="clicked">
        <button @click="clicked">Click me!</button>

        <itemlist :items="items" title="All itens" tag="all"></itemlist>
        <itemlist :items="doneItems" title="done" tag="done"></itemlist>
        <itemlist :items="notDoneItems" title="unfinished" tag="notdone"></itemlist>

        <!-- <h1>All items</h1>
        <ul>
            <li v-for="item in items" :key="'all'+item.id">
            <input type="checkbox" v-model="item.isDone">
            {{item.name}}
            </li>
        </ul>
        
        <h1>Done items</h1>
        <ul>
            <li v-for="item in doneItems" :key="'done'+item.id">
            <input type="checkbox" v-model="item.isDone">
            {{item.name}}
            </li>
        </ul>
        
        <h1>Unfinished items</h1>
        
        <ul>
            <li v-for="item in notDoneItems" :key="'notDone'+item.id">
            <input type="checkbox" v-model="item.isDone">
            {{item.name}}
            </li>
        </ul> -->
</div>
</template>

<script>
import itemlist from './ItemList.vue';
export default {
  components: { itemlist },
    data(){

        return{
        message: '',
        items: [
            {name:'apples', isDone: false, id: 0},
            {name:'milk', isDone: true, id: 1},
            {name:'brownies', isDone: true, id: 2},
            {name:'slaves', isDone: true, id: 3},
        ]
        }
    
},
    methods: {
        clicked(){
            if(this.message.trim() != ''){  
            this.items.push({name: this.message, isDone: false, id: this.items.length})
            }
            this.message = '';
        }
    },

    computed: {
        doneItems(){
            return this.items.filter(item => item.isDone);
        },
        notDoneItems(){
            return this.items.filter(item => !item.isDone);
        }
    }
  }  
</script>

<style>
.afgan {
  list-style-type: square;
}
</style>

