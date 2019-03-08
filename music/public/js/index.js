$(function () {
  var slider = $(".slider"),
    sorts = $("#sorts"),
    mask = $("#mask"),
    username = $('#username');
  var user_quit = $('.user_quit');
  sorts.on("click", showSlider);
  mask.on("click", hideSlider);
  reuqestUserInfo();
  user_quit.click(function () {
    utils_quitUser();
  })
  //显示侧栏
  function showSlider() {
    mask.fadeIn();
    slider.css("left", 0);
  }

  //隐藏侧栏
  function hideSlider() {
    mask.fadeOut();
    slider.css("left", "-20vw");
  }

  function reuqestUserInfo() {
    if (sessionStorage.getItem("name")) {
      console.log('has sessionStorage');
      var params = {
        name: sessionStorage.getItem("name")
      };
      userApi_getUserInfo(params, 'post').then(res => {
        console.log('get----userinfo---has sessionS-', res);
        sessionStorage.setItem("name", res.name);
        username.text(res.name);
      })
    } else {
      userApi_getUserInfo({}, 'get').then(res => {
        console.log('get----userinfo--no sessionS--', res);
        sessionStorage.setItem("name", res.name);
        username.text(res.name);
      })

    }
  }

});


// function get_cookie(Name) {
//   var search = Name + "=" //查询检索的值
//   var returnvalue = ""; //返回值
//   if (document.cookie.length > 0) {
//     sd = document.cookie.indexOf(search);
//     if (sd != -1) {
//       sd += search.length;
//       end = document.cookie.indexOf(";", sd);
//       if (end == -1)
//         end = document.cookie.length;
//       //unescape() 函数可对通过 escape() 编码的字符串进行解码。
//       returnvalue = (document.cookie.substring(sd, end));

//       //  returnvalue=URLDecoder.decode(document.cookie.substring(sd, end), "utf-8");
//     }
//   }
//   return returnvalue;
// }