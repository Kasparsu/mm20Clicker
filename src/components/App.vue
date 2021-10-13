<template>
<div>
  <div class="tabs is-centered is-large">

    <ul>
      <li v-for="(item,index) in items"
      :key="index"
      :class="{'is-active': index === active}"
      @click="active = index">
        <a>{{item.title}}</a>
      </li>
    </ul>
  </div>
  <section class="section">
    <component :is="items[active].componentName"></component>
  
  </section>
</div>
</template>

<script>
import ClickerExample from './ClickerExample.vue'
import ModalExample from './ModalExample.vue'
import ToDoExample from './ToDoExample.vue'
// import {tsParticles} from "tsparticles";
export default {
  components: { ModalExample, ToDoExample, ClickerExample},
    data(){
      return {
        active: 0,
        items: [
          {title:'Clicker', componentName:'ClickerExample'},
          {title:'Modal content', componentName:'ModalExample'},
          {title:'ToDo Example', componentName:'ToDoExample'},
        ]
      }
    }
}
</script>



<style>
html, body {
  width: 100%;
  height:100%;
}
body {
    background: linear-gradient(-45deg, #bd0101, #5b46d3, #a7cc04, #039045 );
    background-size: 150% 200%;
    animation: gradient 9s ease infinite;
}
 
@keyframes gradient {
    0% {
        background-position: 20% 50%;
    }
    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 20% 50%;
    }
}

</style>