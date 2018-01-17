<template>
    <div>
        <ul>
            <li v-for="(item,index) in themeData" :key="index">
                <a href="item.url">
                    <div>
                        <img :src="item.img">
                        <p>{{item.title}}</p>
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
      themeData: []
    };
  },
  methods: {
    getThemeData() {
      this.$http.get("http://119.28.98.182:8888/api/gettopics").then(res => {
        console.log(res);
        this.themeData = res.data;
      });
    }
  },
  created() {
    this.getThemeData();
  }
};
</script>

<style lang="less" scoped>
ul {
  list-style: none;
  width: 96%;
  padding: 2%;
  > li {
    width: 98%;
    padding: 1%;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    box-shadow: 2px 2px 2px 1px #ccc;
    > a {
      color: #000;
      text-decoration: none;
      div {
        width: 100%;
        img {
          width: 100%;
        }
        p {
          width: 100%;
          text-align: center;
        }
      }
    }
  }
}
</style>