<template>
  <div id="app">
    <div>汇率计算</div>
   <ex-input v-for="coin of coins" :kind="coin"></ex-input>
    <div>1111</div>
    
  </div>
</template>

<script>
import $ from 'jquery'  
export default {
  name: 'App',
  data(){
    return{
      coins:[
        {code: "RMB",text: "人民币"},
        {code: "USD",text: "美元"},
        {code: "EUR",text: "欧元"},
        {code: "GBP",text: "英镑"},
        {code: "HKD",text: "港币"},
      ]
    }
  },
  mounted(){
    console.log(coins);
    
  }
}
</script>

<style>
ex-input{
  display: block;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
