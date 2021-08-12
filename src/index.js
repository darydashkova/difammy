// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component('example-component', require('./js/components/Example.vue').default)

// Vue init
const app = new Vue({
    el: '#app'
})
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 15,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: "#next",
        prevEl: "#prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 2,
    spaceBetween: -250,
    navigation: {
        nextEl: "#next2",
        prevEl: "#prev2",
    },
});
$('#btn4').click(function(e) {


    $.fancybox.open({
        src: '#hidden4',
        type: 'inline'
    });
});

var map;

function initMap() {
    map = new ymaps.Map("yandexmap", {
        center: [45.208418, 39.215918],
        zoom: 17
    });

    map.geoObjects
        .add(new ymaps.Placemark([45.208418, 39.215918], {
            balloonContent: 'Краснодарский край, ст. Динская, Шевченко, д. 111<br>+7 903 452-80-49<br>+7 903 454-33-01'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
}
ymaps.ready(initMap);

$(window).scroll(function() {


    if ($(window).scrollTop() > 15) {
        $('.header-block').css("margin-top", "0")
        $('.header-block').addClass('shadow');

    } else {
        $('.header-block').css("margin-top", "31")
        $('.header-block').removeClass('shadow');
        if (window.innerWidth < 991) {
            $('.header-block').css("margin-top", "12")
        }
    }
   /* let scrolls = $(window).scrollTop();

        if($(window).scrollTop()>=aboutStart){
            if($(window).scrollTop()<=about ){
                $('.header__nav-link ').removeClass('header__nav-link_active')
$($(linkMenu)[0]).addClass('header__nav-link_active');
                    }
            else{
                $($(linkMenu)[0]).removeClass('header__nav-link_active');
            }
                }

*/

});

$('#close').click(function() {
    $('.header-block_mob-menu').removeClass('disNon');
    $(this).addClass('disNon');
    $('#open').removeClass('disNon');
    $('body').css("overflow", "hidden");

});
$('#open').click(function() {
    $('.header-block_mob-menu').addClass('disNon');
    $(this).addClass('disNon');
    $('#close').removeClass('disNon');
    $('body').css("overflow", "auto");
});
/*$('.header__nav-link').click(function(e) {
    $('#open').addClass('disNon');
    $('#close').removeClass('disNon');
    $('body').css("overflow", "auto");
    $('.header-block_mob-menu').addClass('disNon');
    $('.header__nav-link').removeClass('header__nav-link_active');
    $(this).addClass('header__nav-link_active');

});*/

$(document).ready(function() {
   $(".header__nav-link").click(function() {
        let elementClick = $(this).attr("href")
        let destination = $(elementClick).offset().top;
        if (window.innerWidth < 991) {
            $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination - 55 }, 1100);
        } else {
            $("html:not(:animated),body:not(:animated)").animate(1100);
        }

        return false;
    });

   $("[data-scroll-button]").click(function() {
       let elementClick = $(this).attr("href")
       let destination = $(elementClick).offset().top;
       $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination - 55 }, 1100);
       return false;
   });


});
$(function(){
    $(".content_top").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});

if(window.innerWidth>991){
    var sections = $('section')
        , nav = $('nav')
        , nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('header__nav-link_active');
                sections.removeClass('header__nav-link_active');

                $(this).addClass('header__nav-link_active');
                nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('header__nav-link_active');
            }
        });
    });
    nav.find('a').on('click', function () {
        var $el = $(this)
            , id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height +50

        }, 500);

        return false;
    });

}
else {
    $('.header__nav-link').click(function (e) {
        $('#open').addClass('disNon');
        $('#close').removeClass('disNon');
        $('body').css("overflow", "auto");
        $('.header-block_mob-menu').addClass('disNon');
        $('.header__nav-link').removeClass('header__nav-link_active');
        $(this).addClass('header__nav-link_active');
    });
}
