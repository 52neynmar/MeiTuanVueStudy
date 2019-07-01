<template lang="html">
    <div class="events">
         <button @click="msg(parm1)" @dblclick="$emit('dblPick',parm2)" type="button" name="button">test</button>
           <ul>
            <li v-for="item in testLst" :key="item">
                 {{item}}
            </li>
          </ul>
    </div>
</template>

<script>
export default {
    props:['testLst','msg'],
    data()
    {
          return{
              parm1:'abc',
              parm2:333
          }
    },
    methods:{
        // msg()
        // {
        //     alert('11')
        // }
    }
}
</script>

<style lang="css">
   .events{
       width: 100%;
       border: solid 1px red;
       height: auto;
       min-height: 100px;
   }
</style>
