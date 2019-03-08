 $(function () {
     //  获取现有所有课程
     var all_class_tea = $('.all_class_tea');
     classApi_getAllClassInfo({}, 'get')
         .then(res => {
             addClassItem(res);
         }).catch(err => {
             console.log('err', err);
         })

     //搜索
     var search = $('.fa-search');
     var search_class = $('#search_class');
     $(document).keydown(function (event) {
         if (event.keyCode == 13) {
             classApi_getClassInfoByCategory({
                     category: search_class.val()
                 }, 'post')
                 .then(res => {
                     addClassItem(res);
                 })
         }
     })
     search.click(function () {
         classApi_getClassInfoByCategory({
                 category: search_class.val()
             }, 'post')
             .then(res => {
                 addClassItem(res);
             })
     })
     // 分类导航
     var slider = $(".slider"),
         sorts = $("#sorts"),
         mask = $("#mask");

     sorts.on("click", showSlider);
     mask.on("click", hideSlider);



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
     //添加class_item
     function addClassItem(res) {
         var class_item = '';
         for (var i = 0; i < res.length; i++) {
             class_item += '<div class="all_class_item"><div class="top_pic"><img class="class_img"' + ' ' + 'src="' + res[i].img_url + '"><p class="sort_txt">' + res[i].category + '</p></div><div class="bottom_txt"><p class="class_name f14">' + res[i].title + '</p><span class="grade f12">' + res[i].grade + '</span><span class="money f10">' + res[i].price + '</span><p class="introduce f12">' + res[i].describe + '</p></div></div>'
             all_class_tea.html(class_item);
         }
     }

 })