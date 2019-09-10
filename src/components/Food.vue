<template>
  <div >
     <div v-model="currentList">
    <div v-for="item in list" :key="item.name" :id="item.name">
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
    </div>
  </div>
</template>

<script>
import getaxios from"../apis/apis"
export default {
    data(){
    return{
    currentList: this.list

    }
    },
  props: ['list'],
  mounted: function() {
    getaxios("/api/goods").then(res => {
      // console.log(res.data.data);
      // console.log(res.data.goods);
      // console.log(res.data);
      const { data } = res.data;
      // console.log(data);

      console.log(this.list);

      return (this.list = data);
    });
  }
};
</script>

<style lang="less">
.rightbox {
  flex: 1;
  height: 500px;
  overflow: auto;
  width: 300px;
  // background-color: aquamarine;
  .righTitle {
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
</style>