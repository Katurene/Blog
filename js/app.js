/**
 * Created by katur on 24.04.2019.
 */
$(function () {
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /*фиксация шапки*/

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {

        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /*плавный скролл*/

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var  blockId = $(this).data('scroll');
    });

});