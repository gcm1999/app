import { reqGetCode, reqUserRegister } from "@/api";
const state = {
    code: '',
};
const mutations = {
    saveCode(state, code) {
        state.code = code;
  }
};
const actions = {
    async getCode(context, phone) {
        let res = await reqGetCode(phone);
        // console.log(res);
        if (res.code == 200) {
            context.commit("saveCode", res.data);
            return "ok";
        } else {
            return new Error("faild")
        }
    },
    async userRegister(context, user) {
        let res = await reqUserRegister(user);
        console.log(res);
        if (res.code == 200) {
            return 'ok'
            // context.commit()
        } else {
            return Promise.reject(new Error('faild'))
        }
    }
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
