import { reqAddCart, reqGetGoodsDetail } from "@/api";
import store from ".";

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
  async addCart(context, { skuId, skuNum }) {
    let res = await reqAddCart(skuId, skuNum);
    // console.log(res);
    // sessionStorage.setItem("skuInfo", store.state.detail.skuInfo);
  },
};
const getters = {
  categoryView(state) {
    return state.goodsDetail.categoryView || {};
  },
  skuInfo(state) {
    return state.goodsDetail.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodsDetail.spuSaleAttrList || {};
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
