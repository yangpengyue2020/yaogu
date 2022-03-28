<template>
  <div>
    <my-button>world</my-button>
    <el-row class="demo-autocomplete">
      <el-col :span="12">
        <div class="sub-title">激活即列出输入建议</div>
        <el-autocomplete
          class="inline-input"
          v-model="state1"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          @select="handleSelect"
        ></el-autocomplete>
      </el-col>
      <el-col :span="12">
        <div class="sub-title">输入后匹配输入建议</div>
        <el-autocomplete
          class="inline-input"
          v-model="state2"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          :trigger-on-focus="false"
          @select="handleSelect"
        ></el-autocomplete>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MyButton from "@/components/MyButton.vue"
export default {
  name: "AboutView",
  components:{MyButton},
  data() {
    return {
      restaurants: [],
      state1: "",
      state2: "",
    };
  },
  methods: {
    querySearch(queryString, cb) {
      // 方法属性
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
        // arr.filter(function(item){
        //   return item =="222"
        // })
      // 调用 callback 返回建议列表的数据
      cb(results);
      // 通过cb回调函数把过滤后的结果返回出去
    },
    createFilter(queryString) {
      // 返回的是一个函数
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "王赛军", address: "605" },  
        { value: "王雪婷", address: "302" },
        { value: "王泽豪", address: "605" },
        { value: "王泽航", address: "607" },
        { value: "李小涛", address: "605" },
        { value: "吴炳兴", address: "605" },
        { value: "左一诺", address: "302" }
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
};
</script>