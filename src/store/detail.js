import { reqGetGoodsDetail } from "@/api";

const state = {
  goodsDetail: {},
};
const mutations = {
  savaGoodsDetail(state, goodsDetail) {
    state.goodsDetail = goodsDetail;
  },
};
const actions = {
  async getGoodsDetail(context, skuId) {
    let res = await reqGetGoodsDetail(skuId);
    // console.log(res);
    if (res.code == 200) {
      context.commit("savaGoodsDetail", res.data);
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
