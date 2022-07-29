// search小仓库
import { getReqSearchInfo } from "@/api";

const state = {
  searchInfo: {},
};
const mutations = {
  saveSearchInfo(state, searchInfo) {
    state.searchInfo = searchInfo;
  },
};
const actions = {
  async saveSearchInfo(context, params = {}) {
    let res = await getReqSearchInfo(params);
    if (res.code == 200) {
      // console.log(res);
      context.commit("saveSearchInfo", res.data);
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
