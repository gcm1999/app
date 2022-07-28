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

export const reqUserRegister = (user) =>
  requests({ url: `/user/passport/register`, method: "post", data: user });
