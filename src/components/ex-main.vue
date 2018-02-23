
<template>
    <div>
        <ex-input v-for="coin of coins" :kind="coin"></ex-input>
        <br>
       <div>123</div>
    </div>
</template>
<script>    
    export default {
         data() {
                    return {
                        main: { code: "", text: "" },
                        coins: [
                            { code: "RMB", text: "人民币" },
                            { code: "USD", text: "美元" },
                            { code: "EUR", text: "欧元" },
                            { code: "GBP", text: "英镑" },
                            { code: "HKD", text: "港币" },
                        ]
                    }
                }
    } 
</script>
