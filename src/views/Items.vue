
<template>
  <div>
    <!-- 左边 -->
    
    <div class="container">
      <div class="leftbox">
      <ul class="content">
        <div v-for="item in list" :key="item.name">
        <div :class="{left:true,select:current==item.name}"   @click="begsroll(item.name)" >
          <label  :class="{leftInfo:true}">{{item.name}}</label>
        </div>
        </div>

        </ul>
      </div>
      <!-- 右边 -->
      <div class="rightbox">
       <ul class="content">
        <div  v-for="item in list" :key="item.name" :id="item.name">
          <p :class="{righTitle:true}">{{item.name}}</p>
        <div class="right-item" v-for="(food,key) in item.foods" :key="key">
      
            <img class="img" :src="food.icon" alt="没有图片" />
      
          <div class="text">
            <p class="text-name">{{food.name}}</p>
            <p>咸粥</p>
            <p>
              <span class="text-rate">月售</span>
              <span>好评率</span>
            </p>
            <div class="text-price">
              <p class="text-orign">
                <span>￥</span>
                <span>24</span>
              </p>
              <span>￥</span>
              <span>28</span>
            </div>
        </div>
          </div>
        </div>
           </ul>
        </div>
    </div>
  </div>
  
</template>
      

<script>
import BScroll from 'better-scroll'
import getaxios from "../apis/apis";
// import axios from 'axios'
export default {
  data() {
    return {
      list: [],
      current:'热销榜'
     
    };
  },
  mounted: function() {
    getaxios("/api/goods").then(res => {
      // console.log(res.data.data);
      // console.log(res.data.goods);
      // console.log(res.data);
      const { data } = res.data;
      // console.log(data);

      // console.log(this.list);

      return (this.list = data);
    });//new 一个better scroll的实例，让容器和滚动关联起来
     this.leftdiv=new BScroll(".leftbox",{
      click:true
    })
    //这里用了this就不用let了
     this.rightdiv=new BScroll(".rightbox",{
      click:true,
      probeType:3
    })
    // console.log(document.querySelector('.rightbox'));
    //点击菜单，关联滚动
    this.rightdiv.on('scroll',(e)=>{
      //滚动获取纵轴高度
     let scrollHeight=Math.abs(e.y)
      console.log(scrollHeight);
      //计算属性可以通过this.计算属性获取
      console.log(this.getheight);
      this.getheight.map((v,i)=>{
        console.log(v,i);
        if(scrollHeight<=this.getheight[0].height){
            this.current=this.getheight[0].name
        }
        if(scrollHeight>=v.height){
          //这里是直接 this.current 获取他的值
          this.current=this.getheight[i+1].name
        }
        
      })
      // console.log(111);
      
      
    })
    
  },

  updated:function(){

    
  },
    computed:{

    getheight(){
    let arr=[]
     let total=0;
      let getdom=document.getElementById("热销榜").offsetHeight
      console.log(getdom);
      this.list.forEach((obj,i)=>{
        console.log(obj.name);
        //获取不同id的dom节点的盒子高度
        let getdom=document.getElementById(obj.name).offsetHeight
         console.log(getdom);
        //获取到叠加的高度
         total+=getdom
         console.log(total);
         
        //获取到叠加的名字和高度的对象，数组
         arr.push({name:obj.name,height:total})
        console.log(arr);
        
      })
        return arr

    }
  },
  
      methods:{
        //点击左侧右侧联动
        begsroll(a){
          console.log(this.list);
          this.list.map((item)=>{
            console.log(item.name);
            if(item.name===a){

              this.current = item.name       
            }
            console.log('AAAA',this.current);
              
          })
          //右侧联动 scrollToElement中第一个参数是滚动到的选择器，第二个是时间

          this.rightdiv.scrollToElement(`#${this.current}`,500)
         
        }
    
      }
};
</script> 

<style lang="less" scoped>

.container {
  display: flex;
  width: 100%;
  .leftbox {
    height: 500px;
    overflow: auto;
    .left {
      display: flex;
      width: 120px;
      height: 100px;
      // background-color: antiquewhite;
      align-items: center;
      padding-left: 5px;
      margin-bottom: 5px;
      // height: 300px;
      .leftInfo{
        height: 100%;
      }
    }
    .select{
  background-color: gray;
}
  }
  .rightbox {
    flex: 1;
    height: 500px;
    overflow: auto;
    width: 300px;
    // background-color: aquamarine;
    .righTitle{
      // height: 20px;
      background-color: white;
    }
    .right-item {
      display: flex;
      img {
        width: 100px;
        height: 100px;
        padding: 10px;
      }
      .text {
        padding: 8px;
        flex: 1;
        // background-color: aqua;
        // display: flex;
        .text-rate {
          margin-right: 10px;
        }
        .text-name {
          font-size: 22px;
        }
        .text-price {
          display: flex;
          .text-orign {
            color: red;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>