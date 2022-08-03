import { reqDeleteCart, reqGetCartList } from "@/api";

const state = {
  cartList: [],
};
const mutations = {
  saveCartList(state, cartList) {
    state.cartList = cartList;
  },
};
const actions = {
  async getCartList(context) {
    let res = await reqGetCartList();
    console.log(res);
    if (res.code == 200) {
      context.commit("saveCartList", res.data);
      return "ok";
    }
  },
  async deleteCart({ commit }, skuId) {
    let res = await reqDeleteCart(skuId);
    console.log(res);
    if (res.code == 200) {
      return "ok";
    }
  },
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
  //   cartInfoList(state) {
  //     return state.cartList.cartInfoList || [];
  //   },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
