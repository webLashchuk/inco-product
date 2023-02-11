$(function () {
    //sticky header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $('.header').addClass('header__secondary header__secondary--sticky')
        } else {
            $('.header__main').removeClass('header__secondary header__secondary--sticky'),
                $('.header__secondary').removeClass('header__secondary--sticky')
        }
    });

    //burger-menu
    $('.burger-btn').on('click', function () {
        $('.mobile-menu__inner').toggleClass('mobile-menu__inner--active');
        $('.overlay').toggleClass('overlay--active');
        $('body').toggleClass('lock');
    });

    //sidebar filter
    $('.sidebar__item--open').on('click', function () {
        $(this).nextAll('.sidebar__item').slideToggle(600);
        $('.sidebar__btn--close').toggleClass('sidebar__btn--disabled');
        $('.sidebar__btn--open').toggleClass('sidebar__btn--disabled');
    });

    $(".sidebar__item--close").on('click', function () {
        $(this).prevUntil('.sidebar__item--open').slideUp(600);
        $(this).slideUp(600);
        $('.sidebar__btn--close').addClass('sidebar__btn--disabled');
        $('.sidebar__btn--open').removeClass('sidebar__btn--disabled');
    });

    //size tab
    $(document).ready(function () {
        $('#gender').click(function () {
            if ($('#kids').is(":checked") && $(window).width() < 992) {
                $('.print-menu__filter-item').nextAll('.print-menu__filter-item--dimension').slideDown(600);
            } else if ($(window).width() > 992) {
                $('.print-menu__filter-item--dimension').css('display', 'none');
            }
            else {
                $('.print-menu__filter-item').nextAll('.print-menu__filter-item--dimension').slideUp(600);
            }
        })
    });

    //icon-bar menu
    $(".icon-bar__item-open").on('click', function () {
        $(this).nextAll('.icon-bar__item, .icon-bar__item-close').slideDown(600);
        $('.icon-bar').addClass('icon-bar--active');
        $('.icon-bar__item-close').removeClass('icon-bar__item-close--disabled');
        $('.icon-bar__item-open').addClass('icon-bar__item-open--active');
        $('.icon-bar__item-close').removeClass('icon-bar__item-close--active');
    });

    $('.icon-bar__item-close').on('click', function () {
        $(this).prevUntil('.icon-bar__item-open').slideUp(600);
        $('.icon-bar__item-close').addClass('icon-bar__item-close--disabled');
        $('.icon-bar').removeClass('icon-bar--active');
        $('.icon-bar__item-open').removeClass('icon-bar__item-open--active');
    });

    function displayBlock() {
        if ($(window).width() > 560) {
            $('.sidebar__item').css('display', 'block');
            $('.sidebar__item--open').css('margin-bottom', '0');
            $('.icon-bar__item').css('display', 'block');
        }
        else if ($(window).width() < 560) {
            $('.sidebar__item').css('display', 'none');
            $('.sidebar__item--open').css('display', 'block');
            $('.sidebar__btn--close').addClass('sidebar__btn--disabled');
            $('.icon-bar__item--disabled').css('display', 'none');
            $('.icon-bar__item-close').addClass('icon-bar__item-close--disabled');
            $('.icon-bar__item-open').removeClass('icon-bar__item-open--active');
        }
    };

    $(window).on('resize', displayBlock);

    //counter
    $('.counter').styler();

    $('#shirt').on('click', function () {
        $(this).nextAll('.print__item--t-shirt').slideToggle(600);
    });

    $('#sweatshirt').on('click', function () {
        $(this).nextAll('.print__item--sweatshirt').slideToggle(600);

    });
    $('#caps').on('click', function () {
        $(this).nextAll('.print__item--caps').slideToggle(600);

    });
    $('#cups').on('click', function () {
        $(this).nextAll('.print__item--cups').slideToggle(600);

    });
    $('#sert').on('click', function () {
        $(this).nextAll('.print__item--sert').slideToggle(600);

    });
    $('#pazzle').on('click', function () {
        $(this).nextAll('.print__item--pazzle').slideToggle(600);
    });
    $('#bags').on('click', function () {
        $(this).nextAll('.print__item--bags').slideToggle(600);
    });

    //callback-form
    $('.callback-btn').on('click', function () {
        $('.callback').addClass('callback--active');
        $('.callback-overlay').addClass('callback-overlay--active');
        $('body').addClass('lock');
        $('body').addClass('lock--callback');
    });
    $('.callback__close').on('click', function () {
        $('.callback').removeClass('callback--active');
        $('.callback-overlay').removeClass('callback-overlay--active');
        $('body').removeClass('lock');
        $('body').removeClass('lock--callback');
    });
})