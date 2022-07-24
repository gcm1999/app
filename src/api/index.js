// api统一管理
import requests from "./requests";

//      三级联动接口
//      /api/product/getBaseCategoryList    get 无参数

export const reqCategoryList = () => {
    // 发请求
    requests({
        url: '/product/getBaseCategoryList',
        method:'get',
    });
}