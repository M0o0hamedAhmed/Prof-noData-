$(document).ready(function() {
    $('.toggle').click(function() {
        $('.toggle').toggleClass('active');
        $('.menu').toggleClass('height');


        // $('.active').click(function() {
        //     if ($('.menu').css('height', '100%')) {;
        //     }
        // });



    });



    $('.menu').click(function() {
        $('.menu').toggleClass('height');
    });



    $('#loading').fadeOut(1000, function() {
        $('body').css('overflow', 'auto');
    });
});
$('.count').countTo({
    speed: 1000,
    refreshInterval: 10
});
//==
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
new WOW().init();
//
// let buttons = document.querySelector("#buttons").children;
// let items = document.querySelector(".items").children;

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function() {
//         for (let j = 0; j < buttons.length; j++) {
//             buttons[j].classList.remove("active")
//         }
//         this.classList.add("active")

//         let target = this.getAttribute("data-target");

//         for (let k = 0; k < items.length; k++) {

//             items[k].style.opacity = "0.7";
//             items[k].style.transform = 'scale(0.8)';



//             if (items[k].getAttribute("data-id") == target) {   
//                 items[k].style.opacity = "1";
//                 items[k].style.transform = '';
//             }
//             // if (items[k].getAttribute("data-id") != target) {
//             //     items[k].children.style.padding = "0";
//             //     items[k].children.style.height = "0";
//             // }
//             if (target == "all") {
//                 items[k].style.opacity = "1";
//                 items[k].style.transform = 'scale(1)';

//             }


//         }

//     });
// }
let offSet = $('.portfolio').offset().top;
console.log(offSet);
$(window).scroll(function() {
    let wscroll = $(window).scrollTop();
    console.log(wscroll);
    if (wscroll > offSet - 700) {
        $('.html').css('width', '90%');
        $('.css').css('width', '80%');
        $('.js').css('width', '60%');
        $('.jquery').css('width', '70%');
        $('.sass').css('width', '85%');
        $('.angular').css('width', '75%')
    }
})