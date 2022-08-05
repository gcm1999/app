import { reqGetUserAddressList, reqGetUserOrder } from "@/api";

const state = {
  userAddressList: [],
  userOrder: {},
};
const mutations = {
  saveUserAddressList(state, userAddressList) {
    state.userAddressList = userAddressList;
  },
  saveUserOrder(state, userOrder) {
    state.userOrder = userOrder;
  },
};
const actions = {
  async getUserAddressList({ commit }) {
    let res = await reqGetUserAddressList();
    // console.log(res);
    if (res.code == 200) {
      commit("saveUserAddressList", res.data);
      return "ok";
    } else {
      return new Error("failed");
    }
  },
  async getUserOrder({ commit }) {
    let res = await reqGetUserOrder();
    // console.log(res);
    if (res.code == 200) {
      commit("saveUserOrder", res.data);
      return "ok";
    } else {
      return new Error("failed");
    }
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
