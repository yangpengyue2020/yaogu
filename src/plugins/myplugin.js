// 插件
// let myplugin = {
//     install(Vue){
//         // 把插件都挂载 vue 的原型上
//         Vue.prototype.cuiplugin = function() {
//             // 业务
//             console.log("cuiweijun")
//         }
//     }
// }
// let myplugin = function(Vue) {
//     Vue.prototype.cuifn = function() {
//         console.log("=====")
//     }
// }
// 防抖插件
let myplugin = function(Vue){
    Vue.prototype.debouncefn = function(fn,wait) {
        let timer = null
        return function() { // 被封装后的新的业务函数
            clearTimeout(timer)
            timer = setTimeout(function(){
                fn() // fn 是业务函数
            },wait)
        }
    }
    Vue.prototype.throttlefn = function() {
        console.log("====")
    }
}
export default myplugin