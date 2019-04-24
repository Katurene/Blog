/**
 * Created by katur on 24.04.2019.
 */
$(function () {
    var header = $("#header"),
        introH = $("#intro").innerHeight();

    $(window).on("scroll", function () {


        console.log(introH);
    });
});