<template>
  <div id="app">
    <mt-popup v-model="popupVisible" position="left" popup-transition="popup-slide">
      <img src="http://119.28.98.182:8888/logo.png" alt="">
      <ul class="nav">
        <li v-for="(item,index) in channel" :key="index">
          <router-link :to="{name:item.pathName}" @click.native="popupBtn">{{item.channelName}}</router-link>
        </li>
      </ul>
    </mt-popup>
    <mt-header title="红旅动漫">
      <mt-button icon="more" slot="left" @click="popupBtn"></mt-button>
      <mt-button icon="search" slot="right"></mt-button>
    </mt-header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      popupVisible: false,
      channel:[
        {pathName:"index",channelName:"首页"},
        {pathName:"serialize",channelName:"连载动漫"},
        {pathName:"theme",channelName:"专题列表"}
      ]
    };
  },
  methods: {
    popupBtn() {
        // console.log(1);
      this.popupVisible = !this.popupVisible;
    }
  }
};
</script>

<style lang="less">
.nav {
  list-style: none;
  padding-left: 0px;
  > li {
    height: 50px;
    line-height: 50px;
    > a {
      width: 100%;
      height: 100%;
      display: block;
      text-decoration: none;
      font-size: 20px;
      color: #666;
      text-align: center;
      border-bottom: 1px solid #aaa;
    }
  }
}
.mint-popup {
  background: rgba(255, 255, 255, 0.8);
  height: 100%;
}
.mint-header {
  background-color: #fa683e;
}
</style>
