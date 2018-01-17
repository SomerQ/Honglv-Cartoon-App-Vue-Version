<template>
    <div>
        <ul>
            <li v-for="(item,index) in serializeData" :key="index">
                <a href="item.url">
                    <div>
                        <img :src="item.img">
                    </div>
                    <div>
                        <strong>{{item.name}}</strong>
                        <span>{{item.episode}}</span>
                        <span>{{item.updateTime}}</span>
                        <span>下载次数：{{item.downloadCount}}</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      serializeData: [],
    };
  },
  methods: {
    getSerializeData() {
      this.$http.get("http://119.28.98.182:8888/api/getlianzai").then(res => {
        console.log(res);
        this.serializeData = res.data;
      });
    },
  },
  created() {
    this.getSerializeData();
  }
};
</script>

<style lang="less" scoped>
ul {
  width: 100%;
  height: 100%;
  list-style: none;
  padding-left: 0px;
  li {
      overflow: hidden;
      width: 100%;
      border-bottom: 1px solid #ccc;
    a {
      color: #000;
      div {
        float: left;
        padding: 2%;
        &:first-of-type {
          width: 28%;

          img {
            display: block;
            width: 100%;
          }
        }
        &:last-of-type {
          width: 64%;
          > span {
            display: block;
            margin-top: 5%;
          }
        }
      }
    }
  }
}
</style>