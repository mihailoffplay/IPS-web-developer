/* $(window).on('load', () => {
    setBodyLoaded();
    upbutton();
    initScrollTo();
    initupbutto();
})
 */
/* $(window).on('scroll' , () => {
    toggleupbutton();
}) */

/* $(document).ready(function(){

function upbutton(){
    $('#upbutton').click(function () {
        $('html').animate({
            scrollTop: 0,
        }, 500);
    })
} */

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#upbutton').fadeIn('slow');
        } else {
            $('#upbutton').fadeOut('slow');
        }
    });
    $('#upbutton').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 700);
    });
});

/* $(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
            $('#upbutton').fadeIn();
        } else {
            $('#upbutton').fadeOut();
        }
    }); */

/* function toggleupbutton() {
    if ($(window).scrollTop() >= 400) {
        $('#upbutton').addClass('visible')
    } else {
        $('#upbutton').removeClass('visible')
    }
} */