$(function () {
    var sort1 = $('.sort1'),
        sort2 = $('.sort2'),
        sort3 = $('.sort3'),
        sort4 = $('.sort4');
    var sort_item1 = $('.sort_item1'),
        sort_item2 = $('.sort_item2'),
        sort_item3 = $('.sort_item3'),
        sort_item4 = $('.sort_item4');
    var list_item = $('.list_item');
    sort1.mouseover(function () {
        sort_item1.css('display', 'block');
        sort_item2.css('display', 'none');
        sort_item3.css('display', 'none');
        sort_item4.css('display', 'none');
    })
    sort2.mouseover(function () {
        sort_item1.css('display', 'none');
        sort_item2.css('display', 'block');
        sort_item3.css('display', 'none');
        sort_item4.css('display', 'none');
    })
    sort3.mouseover(function () {
        sort_item1.css('display', 'none');
        sort_item2.css('display', 'none');
        sort_item3.css('display', 'block');
        sort_item4.css('display', 'none');
    })

    sort4.mouseover(function () {
        sort_item1.css('display', 'none');
        sort_item2.css('display', 'none');
        sort_item3.css('display', 'none');
        sort_item4.css('display', 'block');
    })


    // var url =document.referrer+window.location.search;
    // console.log(url);
    // console.log(utils_parseURL(url));
})