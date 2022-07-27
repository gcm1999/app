// api统一管理
import requests from "./requests";
import mockReq from "./mockReq";

//      三级联动接口
//      /api/product/getBaseCategoryList    get 无参数

export const reqCategoryList = () => {
    // 发请求
    return requests({
        url: '/product/getBaseCategoryList',
        method:'get',
    });
}
export const mockReqBannerList = () => {
    // 发请求
    return mockReq({
      url: "/banner",
      method: "get",
    });
}
export const getMockReqFloorList = () => {
  // 发请求
  return mockReq({
    url: "/floor",
    method: "get",
  });
};