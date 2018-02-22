<template>
    <div>
        <label for="input">{{coin}}</label>
        <input id="input" type="text" v-model="number"/>
    </div>
</template>
<script>
    export default { 
        data(){
            return{
                coin:"USD",
                number:0
            }
    }
    } 
</script>
<style>
    div{
        width: 100%;
        border: 1px solid red;
    }
    input{
        display: block;
        float: right;
        width: 70%;
        
    }

</style>