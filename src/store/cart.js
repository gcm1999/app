import { reqGetCartList } from "@/api";

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
};
const getters = {
  cartList(state) {
        return state.cartList[0] || {};
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
