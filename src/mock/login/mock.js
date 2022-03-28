let Mock = require("mockjs")
Mock.mock("/api/login",'post',function(config){
    console.log(config.body)// 参数
    let obj = JSON.parse(config.body) // 后台拿到的参数都是字符串
    let user = obj.user
    let pw = obj.pw
    if(user=="admin"&&pw=="123456"){
        return {
            status:200,
            message:"success",
            data:{user:"admin",pw:"123456",token:"1234567890asdf"}
        }
    }else{
        return {
            status:200,
            message:"fail",
            data:{message:"用户密码错误"}
        }
    }
})