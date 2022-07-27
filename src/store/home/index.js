// home小仓库

import { getMockReqFloorList,mockReqBannerList, reqCategoryList } from "@/api/index.js";
// state:仓库存储数据的地方
const state = {
  categoryList: [],
  mockBannerList: [],
  mockFloorList:[],
};
// mutations:修改state的唯一手段
const mutations = {
  categoryList(state, categoryList) {
    state.categoryList = categoryList;
  },
  mockBannerList(state, mockBannerList) {
    state.mockBannerList = mockBannerList;

  },
  getMockReqFloorList(state, mockFloorList) {
    state.mockFloorList = mockFloorList;
  }
};
// action:处理action，可以书写自己的业务逻辑，也可以处理异步
const actions = {
  async categoryList(context) {
    // context.commit("categoryList");
    let res = await reqCategoryList();
    // console.log(res);
    if (res.code == 200) {
      context.commit("categoryList", res.data);
    }
  },
  async mockBannerList({ commit }) {
    let res = await mockReqBannerList();
    if (res.code == 200) {
      // console.log(res);

      commit("mockBannerList", res.data);
    }
  },
  async getMockReqFloorList({ commit }) {
    let res = await getMockReqFloorList();
    if (res.code == 200) {
      // console.log(res);
      commit("getMockReqFloorList", res.data);
    }
  }
};
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库数据更加方便
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
