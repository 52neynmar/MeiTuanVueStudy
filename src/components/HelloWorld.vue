<template>
  <div>
    <!-- <div class="hello">
      <h1>{{ msg }}</h1>
      <div v-html="msg1"></div>
      <div>
        {{number + 1}}
      </div>
      <div v-text="number + 1">
      </div>
      <div v-bind:id="id">
        Ney
      </div>
      <div :id="id1">
        Ney1
      </div>
    </div> -->
    <div class="All">
       <div class="left">
          <label :class="[style1,style2]">动态绑定样式</label>
          <input type="text" v-model="str">
          <input type="text" v-model="ResverStr">
          <div :class="obj">
            style obj
          </div>
          <ul>
            <li v-for="item in List" :key="item">
                 {{item}}
            </li>
          </ul>
       </div>
       <div class="right">

       </div>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      msg1:'<span style="color:red;">Hello World Neymar!</span>',
      number:1,
      id:'txt',
      id1:'txt1',
      str:'abcde',
      style1:'style1',
      style2:'style2',
      obj:{
        'style1':true,
        'style2':false
      },
      List:[1,2]
    }
  },
  computed:{
    ResverStr()
    {
       return this.str.split("").reverse().join("")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 .All{
   min-height: 50px;
   height: auto;
   margin-bottom: 5%;
 }
 .left{
   text-align: left;
   float: left;
   width: 49%;
   min-height: 100px;
   border: solid 1px gray;
 }
  .right{
   float: left;
   width: 49%;
   min-height: 100px;
   margin-left: 10px;
   border: solid 1px gray;
 }
 .style1{
   color: aqua;
 }
  .style2{
   font-size: 18px;
 }
</style>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
