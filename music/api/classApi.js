//获取所有课程信息
function classApi_getAllClassInfo(data = {}, type) {
    var url = utils_getServerHttp('/class');
    return utils_ajaxRequest(url, data, type)
}

//获取所有课程信息
function classApi_getClassInfoByCategory(data = {}, type) {
    var url = utils_getServerHttp('/class/search');
    return utils_ajaxRequest(url, data, type)
}
