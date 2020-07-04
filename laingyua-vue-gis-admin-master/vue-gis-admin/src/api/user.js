
import request from "../Utils/common/request"
export function getUesrs(id) {
    let url = "/user/userList"
    return request.getRequest(url, {
        id: id ? id : ""
    })
}
/**
 *  添加用户信息
 * @param {*} data 
 */
export function addUser(data = {}) {
    let url = "/user"
    return request.postRequet(url, data)
}