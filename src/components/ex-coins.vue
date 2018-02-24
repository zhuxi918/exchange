<template>
    <div>
        <h3>请选择添加的币种</h3>
        <div class="row" v-for="c of chosen">
            <span>{{c.text}}</span>   
            <span>{{c.code}}</span> 
        </div>
    </div>
</template>  
<script>
    export default{
        
        data(){
            return{
                chosen:[],
                other:[
                    // {code:,text:}
                ]
            }
        },
        created(){
        
            this.chosen=this.$route.params.coins
            console.log(this.choiisen);
            
        }
    }
</script>  
<style> 
    .row{
        display: flex;
        justify-content: space-between;
        padding: 2vw;
    }
    .row > span{
        display: block;
    }
</style>