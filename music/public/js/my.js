$(function () {
  // 左边导航
  var freeClass = $('.free-class'),
    tipsTxt = $('.tips-txt'),
    ask = $('.ask'),
    spec = $('.spec');
  var specItem = $('#spec-item'),
    questItem = $('#quest-item'),
    txtItem = $(' #txt-item'),
    freeItem = $('#free-item');
  var oneItem = $('.one-item'),
    twoItem = $('.two-item'),
    threeItem = $('.three-item'),
    fourItem = $('.four-tem');
  // 分类导航
  var slider = $(".slider"),
    sorts = $("#sorts"),
    mask = $("#mask");
  // 个人信息
  var username = $('.username'),
    sex = $('.sex'),
    come_days = $('.come_days'),
    study_hours = $('.study_hours'),
    habit = $('.habit');
  // 设置
  var setting = $('.setting'),
    set_yes = $('.set_yes'),
    set_no = $('.set_no'),
    set_item = $('.set_item'),
    set_name = $('#set_name'),
    set_sex = $('#set_sex'),
    set_habit = $('#set_habit');

  sorts.on("click", showSlider);
  mask.on("click", hideSlider);
console.log('sessionStorage.getItem("name")  ',sessionStorage.getItem("name"));
  userApi_getUserInfo({
      name: sessionStorage.getItem("name")
    }, 'post')
    .then(res => {
      var comeDays = utils_getYearMonDay(new Date(res.createdAt));
      sessionStorage.setItem("name",res.name);
      username.text(res.name);
      study_hours.text(res.study_hours);
      come_days.text(comeDays);
      habit.text(res.habit);
      sex.text(res.sex);
    })
  setting.click(function () {
    set_item.css('display', 'block');
  })
  set_no.click(function () {
    set_item.css('display', 'none');
  })
  set_yes.click(function () {
    var params = {
      origin_name: sessionStorage.getItem("name"),
      name: set_name.val(),
      habit: set_habit.val(),
      sex: set_sex.val()
    }
    userApi_upDataFromSetting(params, 'post')
      .then(res => {
        if (res) {
          sessionStorage.setItem("name", res.data.name);
          username.text(res.data.name);
          study_hours.text(res.data.study_hours);
          come_days.text(res.data.come_days);
          habit.text(res.data.habit);
          sex.text(res.data.sex);
          set_item.css('display', 'none');
        }


      })
  })
  freeClass.click(function () {
    freeItem.css('display', 'block');
    oneItem.addClass('selceted-list-item');
    txtItem.css('display', 'none');
    twoItem.removeClass('selceted-list-item');
    questItem.css('display', 'none');
    threeItem.removeClass('selceted-list-item');
    specItem.css('display', 'none');
    fourItem.removeClass('selceted-list-item');
  });

  tipsTxt.click(function () {
    freeItem.css('display', 'none');
    oneItem.removeClass('selceted-list-item');
    txtItem.css('display', 'none');
    twoItem.addClass('selceted-list-item');
    questItem.css('display', 'block');
    threeItem.removeClass('selceted-list-item');
    specItem.css('display', 'none');
    fourItem.addClass('selceted-list-item');
  })

  ask.click(function () {
    freeItem.css('display', 'none');
    oneItem.removeClass('selceted-list-item');
    txtItem.css('display', 'block');
    twoItem.removeClass('selceted-list-item');
    questItem.css('display', 'none');
    threeItem.addClass('selceted-list-item');
    specItem.css('display', 'none');
  });
  spec.click(function () {
    freeItem.css('display', 'none');
    oneItem.removeClass('selceted-list-item');
    txtItem.css('display', 'none');
    twoItem.removeClass('selceted-list-item');
    questItem.css('display', 'none');
    threeItem.removeClass('selceted-list-item');
    specItem.css('display', 'block');
    fourItem.addClass('selceted-list-item');
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

})