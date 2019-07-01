<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <button-counter></button-counter>
    <HelloWorld msg="(test)Welcome to Your Vue.js App"/>
    <ev :testLst="testLst" :msg='msg' @dblPick="dblPick"></ev>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ev from './components/events'
import Vue from 'vue'

Vue.component('button-counter', {
  props: ['postTitle'],
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

export default {
  name: 'app',
  components: {
    HelloWorld,
    ev
  },
  data()
  {
     return {
       testLst:[10,20,30],
       countTotal:0
     }
  },
   methods:{
     msg(v)
     {
       window.console.log("子组件的单击参数1："+v+"")
     },
     //测试组件双击事件
     dblPick(parm2)
     {
       alert(parm2)
     }
   }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 20px;
}
</style>
