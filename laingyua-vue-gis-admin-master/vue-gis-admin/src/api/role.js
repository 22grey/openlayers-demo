import request from "../Utils/common/request"
export function getRoles(id) {
    // let url = "/users"
    // if (id)
    let url = "/role/roleList"
    return request.getRequest(url, {})
}

export function addUser() {
    return "---"
}