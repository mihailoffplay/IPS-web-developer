$('[data-modal=sign-up]').on('click', function() {
    $('.overlay, #sign-up').fadeIn('slow');
    });
    $('.modal_close').on('click', function(){
        $('.overlay, #sign-up').fadeOut('slow');
    });

