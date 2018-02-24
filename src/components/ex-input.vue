/* eslint-disable */
<template>
    <div class="container" :class="{active: this.kind.code==this.main.code }" @click="handle()" >
        <label for="input">{{coin.text}}</label>
        <input id="input" type="number" v-model="number"/>
    </div>
</template>
<script>
    export default {
        props:["kind","index","main","rate"],
        data(){
            return{
                coin:this.kind,
                number:null,
                MySwitch:false,
                ownRate:0,
            }
        },
        updated(){
            for (const key in this.rate) {
                    if (  key == this.kind.code) {
                        this.ownRate=this.rate[key]
                        
                        break
                    }
                }
                if (this.kind.code == this.main.code) {
                    this.$emit("getCur",this.number)
                }
        },
        methods: {
            handle(){              
                this.$emit("trans",this.index)
                
                
            }
        },
        // watch:{
        //     main(){
        //         if (this.kind.code == !this.main.code) {
        //             this.number=null;
        //         }
        //         console.log(this.number)
        //     }
        // }
    } 
</script>
<style>
    .container{
        width: 96%;
        /* border: 1px solid red; */
        display: flex;
        justify-content: space-between;
        height: 10vh;
        line-height: 10vh;
        padding: 2%;
        border-bottom: 1px solid #aaa;
    }
    .active{
        background: #eee;
        box-shadow: slategrey .5vw .5vw;
    }
    input{
        display: block;
        width: 70%;
        border:none;
        text-align: right;
        outline: none;
        padding: 5%;
        font-size: 2em;
        background-color: transparent;
    }
    label{

    }

</style>