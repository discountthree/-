// 更改图片途径
// $(function () {
//     $('img').each(function () {
//
//         var img_path = $(this).attr('src')
//
//         img_path = "{% static '" + img_path + "'%}"
//
//         $(this).attr('src',img_path)
//
//     })
//
//     console.log($('body').html())
// })

// 获取数据
// $(function () {
//
//     var data = ['insert into title(t_name, t_content, t_img) values ']
//     $('.cont .contBaby').each(function () {
//         // t_name
//         var str1 = $(this).children('h2').children('span').html()
//         // t_content
//         var str2 = $(this).children('h2').children('i').html()
//         // t_img
//         var str3 = $(this).children('h3').children('img').attr('src')
//         // t_categoryname
//         // var str4 = $(this).children('ul').children('li').html().replace('<span></span>','')
//
//         data += "('" + str1 + "'," + "'" + str2 + "',"+ "'" + str3 + "'),"
//         // console.log(str2)
//     })
//     console.log(data)
// })


// 获取分类
// $(function () {
//     var data = ['insert into category(category) values']
//     $('.cont .contBaby ul li').each(function () {
//         var str = $(this).html().replace('<span></span>','')
//         data += "('" + str + "'),"
//     })
//     console.log(data)
// })

// 获取数据
$(function () {

    var data = ['insert into title(t_name, t_content, t_img) values ']
    $('.cont .contBaby').each(function () {


        // var str4 = $(this).children('ul').children('li').html().replace('<span></span>','')

        data += "('" + str1 + "'," + "'" + str2 + "',"+ "'" + str3 + "'),"

    })
    console.log(data)
})