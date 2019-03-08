//获得服务器地址
function utils_getServerHttp(url) {
    if (url) {
        return 'http://localhost:3000' + url;
    } else {
        console.log('Has no server url');
    }
}

//ajax请求
function utils_ajaxRequest(url, data = {}, type) {
    console.log('ajax run---->', data);
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            type: type,
            data: data,
            dataType: "json",
            success: function (res) {
                resolve(res);
            },
            error: function (err) {
                reject(err);
            }
        });
    })
}

//获取x-y的随机数
function utils_GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return Min + Math.round(Rand * Range);
}

// // url的参数解析为对象
// function utils_parseURL(url) {
//     var url = url.split("?")[1],
//         para = url.split("&"),
//         len = para.length,
//         res = {},
//         arr = [];
//     console.log('para', para);
//     console.log('url', url);
//     for (var i = 0; i < len; i++) {
//         arr = para[i].split("=");
//         res[arr[0]] = arr[1];
//     }
//     return res;

// }

function utils_getYearMonDay(date) {
    var today = new Date().getTime();
    var createdDay = new Date(date).getTime();
    var days = (today - createdDay) / (1000 * 60 * 60 * 24) + 1;
    return parseInt(days);

}

function utils_quitUser() {
    if (sessionStorage.getItem("name")) {
        sessionStorage.removeItem("name");
    }
}