<template>
    <div>
 这是评论也
   <Food list="list"/>
    </div>
</template>

<script>
import Food from '../components/Food'
    export default {
        data(){
           return {
                list:[]
            }
        },
         components:{
          Food
        },
    }
</script>

<style lang="less" scoped>

</style>