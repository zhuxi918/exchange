
<template>
    <div>
        <ex-input v-for="(coin,index) of coins" :kind="coin" :index="index" @trans="chose" :main="main"></ex-input>
        <!-- 父与子传方法用@ -->
        <br>
       <div>123</div>
    </div>
</template>
<script>    
    export default {
         data() {
                    return {
                        main: null,
                        coins: [
                            { code: "RMB", text: "人民币" },
                            { code: "USD", text: "美元" },
                            { code: "EUR", text: "欧元" },
                            { code: "GBP", text: "英镑" },
                            { code: "HKD", text: "港币" },
                        ]
                    }
                },
        methods:{
            chose(index){
                this.main=this.coins[index];
                
            }
        }
    } 
</script>
