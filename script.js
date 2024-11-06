$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["SoftWare Engineer", "Frontend Web Developer", "Android developer", "Java Backend Developer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    var typed = new Typed(".typy", {
        strings: ["SoftWare Engineer", "Frontend Web Developer", "Android developer", "Java Backend Developer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 50,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 0,
        responsive: {
            50: {
                items: 1,
                nav: false
            },
            30: {
                items: 2,
                nav: false
            },
            20: {
                items: 4,
                nav: false
            }
        }
    });
});
