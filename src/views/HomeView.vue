<template>
  <div class="home">
    <el-button type="primary">主要按钮</el-button>
    <my-button>
      hello
      <h4>seec3</h4>
    </my-button>
  </div>
</template>
<script>
// @ is an alias to /src
import MyButton from "@/components/MyButton.vue"
export default {
  name: "HomeView",
  components: {
    MyButton
  },
  mounted(){
    // this.cuiplugin()
  }
};
</script>
