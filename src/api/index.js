// api统一管理
import requests from "./requests";
import mockReq from "./mockReq";

//      三级联动接口
//      /api/product/getBaseCategoryList    get 无参数

export const reqCategoryList = () => {
  // 发请求
  return requests({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
};
export const mockReqBannerList = () => {
  // 发请求
  return mockReq({
    url: "/banner",
    method: "get",
  });
};
export const getMockReqFloorList = () => {
  // 发请求
  return mockReq({
    url: "/floor",
    method: "get",
  });
};
// 获取搜索信息
export const getReqSearchInfo = (params) => {
  return requests({
    url: "/list",
    method: "post",
    data: params,
  });
};
// 获取验证码
export const reqGetCode = (phone) =>
  requests({ url: `/user/passport/sendCode/${phone}`, method: "get" });
// 注册
export const reqUserRegister = (user) =>
  requests({ url: `/user/passport/register`, method: "post", data: user });
// 登录
export const reqUserLogin = (user) =>
  requests({
    url: "/user/passport/login",
    method: "post",
    data: user,
  });
// 获取用户信息
export const reqGetUserInfo = () =>
  requests({
    url: "/user/passport/auth/getUserInfo",
    method: "get",
  });
// 退出登录
export const reqUserLogout = () =>
  requests({ url: "/user/passport/logout", method: "get" });
// 商品详情
export const reqGetGoodsDetail = (skuId) =>
  requests({
    url: `/item/${skuId}`,
    method: "get",
  });
// 添加到购物车
export const reqAddCart = (skuId, skuNum) =>
  requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: "post",
  });
// 获取购物车列表
export const reqGetCartList = () =>
  requests({
    url: "/cart/cartList",
    method: "get",
  });
