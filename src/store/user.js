import { reqGetCode, reqUserLogin, reqUserRegister } from "@/api";
const state = {
  code: "",
  token: "",
};
const mutations = {
  saveCode(state, code) {
    state.code = code;
  },
  saveToken(state, token) {
    state.token = token;
  },
};
const actions = {
  async getCode(context, phone) {
    let res = await reqGetCode(phone);
    // console.log(res);
    if (res.code == 200) {
      context.commit("saveCode", res.data);
      return "ok";
    } else {
      return new Error("faild");
    }
  },
  async userRegister(context, user) {
    let res = await reqUserRegister(user);
    console.log(res);
    if (res.code == 200) {
      return "ok";
      // context.commit()
    } else {
      return Promise.reject(new Error("faild"));
    }
  },
  async userLogin(context, user) {
    let res = await reqUserLogin(user);
    console.log(res);
    if (res.code == 200) {
      context.commit("saveToken", res.data.token);
      //   return "ok";
    } else {
      return Promise.reject(new Error("faild"));
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
