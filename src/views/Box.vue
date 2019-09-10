<template>
  <div>
    <!-- 轮播图 -->
    <div>
    <Carousel autoplay v-model="value2" loop>
      <CarouselItem>
        <div class="demo-carousel">
             <img class="demo-img" src="http://img1.qunarzz.com/piao/fusion/1806/fc/e47aa3e1c67bbc02.jpg_750x200_0f3eecf8.jpg" />>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
             <img class="demo-img" src="http://img1.qunarzz.com/piao/fusion/1806/fc/e47aa3e1c67bbc02.jpg_750x200_0f3eecf8.jpg" />>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
             <img class="demo-img" src="http://img1.qunarzz.com/piao/fusion/1806/fc/e47aa3e1c67bbc02.jpg_750x200_0f3eecf8.jpg" />></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
             <img class="demo-img" src="http://img1.qunarzz.com/piao/fusion/1806/fc/e47aa3e1c67bbc02.jpg_750x200_0f3eecf8.jpg" />
             ></div>
      </CarouselItem>
    </Carousel>
    </div>
    <!-- 导航栏 商品 评价 和商家 -->

    <div class="nav-link">
        <router-link to="/">
            <label for="">商家</label>
        </router-link>
         <router-link to="/Evaluate">
            <label for="">评论</label>
        </router-link>
         <router-link to="/Merchant">
            <label for="">商品</label>
        </router-link>
    </div>
     <router-view></router-view>
   <!-- 购物车 -->
   <div id="shopCar">
     <!-- 头部 -->
      <transition name="slide-fade">
     <div class="shopCarHeader" v-show="showCar">
       
     </div>
       </transition>
     <div class="shopCarFooter" @click="showBuyCar">

     </div>
     <!-- 列表 -->
   
   </div>
  </div>
</template>

<script>

export default {
     data () {
            return {
                value2: 0,
                showCar:false

            }
        },
      
        methods:{
          showBuyCar(){
            this.showCar=!this.showCar
          }
        }
};
</script>

<style lang="less" scoped>
.demo-carousel{
    height: 200px;
    width: 100%;
    background-color: aquamarine;
}
.nav-link{
    height: 50px;
    background-color: aliceblue;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
}
#shopCar{
  .shopCarHeader{
     position: fixed;
    bottom: 50px;
    height: 200px;
    width: 100%;
    background-color: yellow;
    // display: none;
  }
  .shopCarFooter{
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 100%;
    background-color: red;
    
  

  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(350px);
  opacity: 0;
}
</style>