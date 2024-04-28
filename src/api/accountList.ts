import request from "@/utils/request.ts";

export const getUserList = (data = {}) =>{
    return request({
        url: '/user/list',
        method: 'POST',
        data
    })
}

export const updateUserStatus = (data = {}) =>{
    return request({
        url: '/user/update_status',
        method: 'POST',
        data
    })
}
