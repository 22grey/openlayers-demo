import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui'
import { Loading } from 'element-ui';
// 加载动画对象
var loadingInstance = null;
// 创建实例对象
var instance = axios.create({
    // baseURL: process.env.VUE_APP_BASEURL,//设置基础请求路径，根据环境自动配置
    timeout: 10000,//设置超时时间
});

// 设置请求拦截
instance.interceptors.request.use(config => {
    // loadingInstance.close();
    // 请求前做的事情
    // console.log("进行了请求拦截", config)
    return config
}, error => {
    // loadingInstance.close();
    return Promise.reject(error);
})

// 设置返回拦截
instance.interceptors.response.use(response => {
    // console.log("进行响应拦截")
    if (loadingInstance)
        loadingInstance.close();
    return response.data
}, error => {
    if (loadingInstance)
        loadingInstance.close();
    if (error.response) {
        switch (error.response.status) {
            case 500:
                Message.error({ message: error.request.responseURL + '接口错误!' });
                break
        }
    } else {
        Message.error({ message: '未知错误!' });
    }
    // 对响应错误做点什么
    return Promise.reject(error);
})
/**
 * 
 * @param {*} url 
 * @param {*} params 
 */
/**
 * 说明：简化get请求函数
 * @param {*} url       接口名称
 * @param {*} params    请求参数
 * @param {*} config    请求自定义设置
 * -baseurl             自定义请求接口基础路径
 * -load                是否显示加载动画 ，默认显示，false是关闭
 * -full                加载动画的背景色是否显示，默认是开启，false是关闭
 * -openPage            开启分液器，默认是开启，false是关闭
 */
const getRequest = function (url, params = {}, config = {}) {
    // 判断是否传递接口名
    if (!url) {
        Message.error({ message: '接口名不能为空!' });
        loadingInstance.close();
        return
    }
    // 设置加载动画的默认参数
    let defultConfig = {
        load: true,
        full: true,
        openPage: true
    }
    // 合并自定义参数和默认参数
    defultConfig = { ...config, ...defultConfig }
    // 默认是分页数据
    let defaultParam = {
        pageSize: 20,
        pageNo: 1
    }
    if (defultConfig.openPage)
        defaultParam = { ...defaultParam, ...params }
    // 判断是否在家动画
    if (defultConfig.load) {
        let color = "rgba(0, 0, 0, 0.6)"
        if (defultConfig.full == false) {
            color = "rgba(0, 0, 0, 0)"
        }
        loadingInstance = Loading.service({ fullscreen: true, text: "加载中，请稍等...", background: color });
    }
    // 设置默认地址
    let url_ = process.env.VUE_APP_BASEURL + url
    // 动态设置请求基础地址
    if (defultConfig.baseurl)
        url_ = defultConfig.baseurl + url
    return instance.request({
        url: url_,
        method: "get",
        params: defaultParam,
        paramsSerializer: function (params) {
            return qs.stringify(params, { arrayFormat: 'comma' })
        }
    })
}
/**
 * 说明：简化post请求的方式
 * @param {*} url       接口地址
 * @param {*} data      请求参数
 * @param {*} config    请求配置
 * -baseurl             自定义请求接口基础路径
 * -load                是否显示加载动画 ，默认显示，false是关闭
 * -full                加载动画的背景色是否显示，默认是开启，false是关闭
 * -openPage            开启分液器，默认是关闭，false是关闭，true是开启
 */
const postRequet = function (url, data = {}, config = {}) {
    // 判断是否传递接口名
    if (!url) {
        Message.error({ message: '接口名不能为空!' });
        loadingInstance.close();
        return
    }
    // 设置加载动画的默认参数
    let defultConfig = {
        load: true,
        full: true,
        openPage: false
    }
    // 合并自定义参数和默认参数
    defultConfig = { ...config, ...defultConfig }
    // 判断是否在家动画
    if (defultConfig.load) {
        let color = "rgba(0, 0, 0, 0.6)"
        if (defultConfig.full == false) {
            color = "rgba(0, 0, 0, 0)"
        }
        loadingInstance = Loading.service({ fullscreen: true, text: "加载中，请稍等...", background: color });
    }
    let url_ = process.env.VUE_APP_BASEURL + url
    // 动态设置请求基础地址
    if (defultConfig.baseurl)
        url_ = defultConfig.baseurl + url
    return instance.request({
        url: url_,
        method: "post",
        data: qs.stringify(data)
    })
}

export default {
    instance,
    getRequest,
    postRequet
}
