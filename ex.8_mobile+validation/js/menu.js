$("body").on('click', '[href*="#"]', function(){
    $.scrollTo($(this.hash), 700);
    console.log(this);
});
