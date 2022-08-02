import {
  reqGetCode,
  reqGetUserInfo,
  reqUserLogin,
  reqUserLogout,
  reqUserRegister,
} from "@/api";
import { getToken, removeToken, setToken } from "@/utils";
const state = {
  code: "",
  userInfo: {},
  token: getToken(),
};
const mutations = {
  saveCode(state, code) {
    state.code = code;
  },
  saveToken(state, token) {
    state.token = token;
  },
  saveUserInfo(state, userInfo) {
    state.userInfo = userInfo;
  },
  userLogout(state) {
    removeToken();
    state.token = "";
    state.userInfo = {};
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
    // console.log(res);
    if (res.code == 200) {
      context.commit("saveToken", res.data.token);
      setToken(res.data.token);
      return "ok";
    } else {
      return Promise.reject(new Error("faild"));
    }
  },
  async userLogout(context) {
    let res = await reqUserLogout();
    if (res.code == 200) {
      context.commit("userLogout");
      return "ok";
    } else {
      return Promise.reject(new Error("faild"));
    }
  },
  async getUserInfo(context) {
    let res = await reqGetUserInfo();
    console.log(res);
    if (res.code == 200) {
      context.commit("saveUserInfo", res.data);
      return "ok";
    } else {
      return Promise.reject(new Error("faild"));
    }
    // context.commit("saveUserInfo",res.data)
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
