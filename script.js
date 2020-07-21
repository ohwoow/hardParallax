$(document).ready(function () {
    $(window).scroll(function (event) {
        let scrollWindow = $(this).scrollTop();
        let widthWindow = $(this).outerWidth();
        let heightContent = $('content').outerHeight();
        let heightParallax = $('.parallax').outerHeight();

        let p = scrollWindow / heightContent * 100;
        let p_b = scrollWindow / heightParallax * 100;
        let o = 1 - 1/100 * p_b;

        let z_1 = 1 + (widthWindow / 10000 * p_b);

        $('.parallax-fog').css('transform', 'scale('+ z_1 +')');
        $('.parallax-fog').css('opacity', o);

        let z_2 = 1 + (widthWindow / 5000000 * p_b)
        $('.parallax-mountain-1').css('transform', 'scale('+ z_2 +')');

        let hr = widthWindow / 2000 * p_b;
        let z_3 = 1 + (widthWindow * 0.000005 * p_b);
        
        $('.parallax-mountain-2').css('transform', 'translate3d('+ hr +'px,0,0) scale('+ z_3 +')');


        let hr_2 = widthWindow / 1500 * p_b;
        let z_4 = 1 + (widthWindow * 0.00001 * p_b);
        $('.parallax-mountain-3').css('transform', 'translate3d('+ hr_2 +'px,0,0) scale('+ z_4 +')');
    })
});