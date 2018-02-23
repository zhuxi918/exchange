<template>
    <div>
        <h3>请选择添加的币种</h3>
        <div v-for="c of chosen">{{c.code}}</div>
    </div>
</template>  
<script>
    export default{
        
        data(){
            return{
                chosen:[],
            }
        },
        created(){
        console.log(this);
            this.chosen=this.$route.params.coins
        }
    }
</script>  