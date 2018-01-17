<template>
  <div>
    <div class="swiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(items,index) in swipe" :key="index"><img :src="items.img" alt="">
          <span class="swiperTitle">{{items.title}}</span>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="content">
      <mt-navbar v-model="selectedId">
        <mt-tab-item v-for="(item,index) in navbar" :key="index" :id="item.id" @click.native="getContent(item.id)">{{item.title}}</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selectedId">
        <mt-tab-container-item :id="selectedId">
          <a :href="items.url" class="showData" v-for="(items,index) in contents" :key="index">
            <img :src="items.img" :alt="items.name">
            <span>{{items.update}}</span>
            <div class="title">
              <span>{{items.name}}</span>
            </div>
          </a>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipe: [],
      selectedId: "1",
      isSwipeable: true,
      contents: [],
      navbar: [
        { title: "新增连载", id: "1" },
        { title: "新增完结", id: "2" },
        { title: "推荐连载", id: "3" },
        { title: "推荐完结", id: "4" }
      ]
    };
  },
  methods: {
    getSwipeData() {
      this.$http.get("http://119.28.98.182:8888/api/getlunbo").then(res => {
        this.swipe = res.data;
      });
    },
    getContent(id) {
      this.$http
        .get("http://119.28.98.182:8888/api/gethometab/" + id)
        .then(res => {
          this.contents = res.data;
        });
    }
  },
  created() {
    this.getSwipeData();
    this.getContent(this.selectedId);
  }
};
</script>

<style scoped lang="less">
.swiper {
  width: 100%;
  height: 120px;
  position: relative;
  img {
    width: 100%;
  }
}
.mint-swipe-indicators {
  left: 100%;
}
.mint-tab-item.is-selected {
  color: #fa683e;
  border-bottom: 3px solid #fa683e;
}
.swiperTitle {
  display: block;
  height: 24px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 18px;
  text-indent: 2em;
  line-height: 24px;
}
.showData {
  height: 240px;
  width: 46%;
  margin: 2%;
  float: left;
  position: relative;
  box-sizing: border-box;
  border: 1px solid #ccc;
  display: block;
  text-align: center;
  > img {
    display: block;
    width: 100%;
    height: 80%;
  }
  > span {
    display: block;
    width: 100%;
    height: 28px;
    line-height: 28px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    position: absolute;
    bottom: 20%;
  }
  .title {
    height: 20%;
    width: 100%;
    position: relative;
    > span {
      color: #333;
      display: block;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>