$(document).ready(function() {
    $(".slider").each(function () { // обрабатываем каждый слайдер
        var obj = $(this);
        $(obj).append("<ul class='nav'></ul>");
        $(obj).find("li").each(function () {
            $(obj).find(".nav").append("<li class='first-li' rel='"+$(this).index()+"'></li>"); // добавляем блок навигации
            $(this).addClass("slider"+$(this).index());
        });
        $(obj).find(".first-li").first().addClass("on"); // делаем активным первый элемент меню
    });
});
function sliderJS (obj, sl) { // slider function
    var ul = $(sl).find(".slider-items"); // находим блок
    var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
    var step = $(bl).width(); // ширина объекта
    $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
}
$(document).on("click", ".slider .nav li", function() { // slider click navigate
    var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
    $(sl).find("li").removeClass("on"); // убираем активный элемент
    $(this).addClass("on"); // делаем активным текущий
    var obj = $(this).attr("rel"); // узнаем его номер
    sliderJS(obj, sl); // слайдим
    return false;
});
