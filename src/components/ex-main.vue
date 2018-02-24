
<template>
    <div>
        <ex-input v-for="(coin,index) of coins" :kind="coin" :index="index" @trans="chose" :main="main" :rate="rates" @getCur="getCur"></ex-input>
        <!-- 父与子传方法用@ -->
        <br>
       <div>123</div>
       <button @click="Exget()">计算</button>
    </div>
</template>
<script>    
    export default {
        props:["coins"],
         data() {
                    return {
                        main: {code: "CNY", text: "人民币"},
                        rates:{},
                        curCoin:0
                    }
                },
        methods:{
            chose(index){
                this.main=this.coins[index];
                console.log(this.main)
            },
            getCur(number){
                this.curCoin=number;
                console.log(this.curCoin);
                
            },
            Exget(){
                this.$http({
                    method:"get",
                    url:"https://api.fixer.io/latest?",
                    params:{
                        base:this.main.code
                    }
                }).then(result=>{
                    this.rates=result.data.rates
                    
                })
            }
        },
        updated(){
            
        },
        watch:{
            main(){
                this.Exget()

            }
        }
    } 
</script>
<style>
    *{
        transition: 0.3s;
    }
</style>