<template>
  <div id="app">
    <header>
      <h3>汇率计算</h3>
      <div class="buttons">
        <button @click="toComputer()" :class="{disable : this.where=='toCoins'}">汇率计算</button>
        <button @click="toCoins()" :class="{disable : this.where=='toComputer'}">币种选择</button>
      </div>
    </header>
    <router-view :coins="coins"></router-view>
  </div>
</template>

<script>
import $ from 'jquery'  
export default {
  name: 'App',
  data(){
    return{
      where:"toCoins",
      main:{code: "",text: ""},
      coins:[
        {code: "CNY",text: "人民币"},
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
      
      if (this.where=="toCoins") {  
        this.$router.push({
          path: 'coins',
          name: 'coins',
          params: {
            coins: this.coins
          }
        })
        this.where="toComputer";
      }
    },
    toComputer(){
      if(this.where=="toComputer")
      {
        this.$router.push({
          path:'/'
        })
        this.where="toCoins"
      }
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
button{
  display: block;
  background: #2cd4eb;
  width: 40vw;
  border: none;
  height: 8vh;
  border-radius: 1vw;
  outline: none;
}
.buttons{
  display: flex;
  justify-content: space-between;
  margin-bottom: 2vh;
}
.disable{
  background: #ddd;

}
</style>
