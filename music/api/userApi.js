//获取用户信息
function userApi_getUserInfo(data = {}, type) {
    var url = utils_getServerHttp('/user/userinfo');
    return utils_ajaxRequest(url, data, type)
}

//注册用户
function userApi_registUser(data = {}, type) {
    var url = utils_getServerHttp('/user/addUser');
    return utils_ajaxRequest(url, data, type)
}
//计算用户学习以及来到的时间
function userApi_computedCommInfo(data={},type){
    var url = utils_getServerHttp('/user/userinfo');
    return utils_ajaxRequest(url, data, type)
}

function userApi_upDataFromSetting(data = {}, type) {
    var url = utils_getServerHttp('/user/updata');
    return utils_ajaxRequest(url, data, type)
}
