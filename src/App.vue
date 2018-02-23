<template>
  <div id="app">
    <router-view></router-view>
    <button @click="toCoins()">选择币种</button>
  </div>
</template>

<script>
import $ from 'jquery'  
export default {
  name: 'App',
  data(){
    return{
      main:{code: "",text: ""},
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
  
    
  },
  methods:{
    toCoins(){
      this.$router.push({
        path: 'coins',
        name: 'coins',
        params: {
          coins: this.coins
        }
      })
    }
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
