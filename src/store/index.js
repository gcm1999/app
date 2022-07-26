import Vue from "vue";
import Vuex from "vuex";
// 需要使用插件一次
Vue.use(Vuex);
// 引入home小仓库
import home from "./home";
import search from "./search";
import user from "./user";
import detail from "./detail";
import cart from "./cart";
import trade from "./trade";
// 对外暴露Store类的一个实例
export default new Vuex.Store({
  // 实现Vuex仓库模块开发存储数据
  modules: {
    home,
    search,
    user,
    detail,
    cart,
    trade,
  },
});
