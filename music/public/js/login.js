$(function () {
    var login = $('.login'),
        username_l = $('#username_l'),
        password_l = $('#password_l'),
        username_r = $('#username_r'),
        password_r = $('#password_r'),
        repassword_r = $('#repassword_r'),
        sub_l = $('#sub_l'),
        sub_r = $('#sub_r'),
        loginItem = $('.loginItem'),
        regist = $('.regist'),
        msg_login = $('.msg_login'),
        msg_regist = $('.msg_regist'),
        registerItem = $('.registerItem');
      
    login.click(function () {
        login.css('color', 'white');
        loginItem.css('display', 'block');
        regist.css('color', '#45404c');
        registerItem.css('display', 'none');
    });
    regist.click(function () {
        regist.css('color', 'white');
        registerItem.css('display', 'block');
        login.css('color', '#45404c');
        loginItem.css('display', 'none');
    })
   

    // sub_r.click(function () {
    //     var params = {
    //         name: username_r.val(),
    //         pwd: password_r.val(),
    //     }
    //     if (password_r.val() == repassword_r.val()) {
    //         console.log(params);
    //         userApi_registUser(params, 'post')
    //             .then(res => {
    //                 if (res.code == 0) {
    //                     sessionStorage.setItem("name", params.name);
    //                     window.location.href = '/html/index.html';
    //                 } else {
    //                     msg_regist.text(res.msg);
    //                 }
    //             })
    //     } else {
    //         msg_regist.text('密码不一致，请重新输入');
    //     }
    // })
})