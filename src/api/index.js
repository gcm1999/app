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
// 删除购物车
export const reqDeleteCart = (skuId) =>
  requests({
    url: `/cart/deleteCart/${skuId}`,
    method: "delete",
  });
// 切换商品选中状态
export const reqChangeChecked = (skuID, isChecked) =>
  requests({
    method: "get",
    url: `/cart/checkCart/${skuID}/${isChecked}`,
  });
// 获取用户地址
export const reqGetUserAddressList = () =>
  requests({
    url: "/user/userAddress/auth/findUserAddressList",
    method: "get",
  });

// 获取用户订单信息
export const reqGetUserOrder = () =>
  requests({
    url: "/order/auth/trade",
    method: "get",
  });
// 提交用户订单
export const reqSubmitOrder = (tradeNo, data) =>
  requests({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method: "post",
    data,
  });
// 获取订单信息
export const reqGetOrderInfo = (orderId) =>
  requests({
    url: `/payment/weixin/createNative/${orderId}`,
    method: "get",
  });
// 获取订单状态
export const reqOrderStatus = (orderId) =>
  requests({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: "get",
  });
