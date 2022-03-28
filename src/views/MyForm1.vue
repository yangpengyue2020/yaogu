<template>
    <div>
        <el-form :model="form" :rules="rules">
            <el-form-item prop="name">
                <!-- 用户名的输入 -->
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item prop="pw">
                <!-- 密码框的输入 -->
                <el-input v-model="form.pw"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name:"MyForm",
    data(){
        return {
            form:{
                name:"塞军",
                pw:"123456"
            },
            rules:{
                name:[
                    {type:"string",required:true,pattern:/zhangsan/,message:"用户名不对"}
                    ],
                pw:[]
            }
        }
    }
}
</script>