/* eslint-disable */
<template>
    <div class="container">
        <label for="input">{{coin.text}}</label>
        <input id="input" type="text" v-model="number"/>
    </div>
</template>
<script>
    export default {
        props:["kind"],
        data(){
            return{
                coin:this.kind,
                number:null,
            }
        }
    } 
</script>
<style>
    .container{
        width: 96%;
        border: 1px solid red;
        display: flex;
        justify-content: space-between;
        height: 10vh;
        line-height: 10vh;
        padding: 2%;
    }
    input{
        display: block;
        width: 70%;
        border:none;
        text-align: right;
        outline: none;
        padding: 5%;
        font-size: 2em;
    }
    label{

    }

</style>