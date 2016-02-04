$( document ).ready(function() {

    //No links prevent default
    $('.nolink a, #menuTab').click( function(e) {
        e.preventDefault();
    });

    var viewportW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if( viewportW >= 600){
      $('.navcluster').removeClass('closed').addClass('open');
    }


    $('#menuTab').on('click', function(){
      $(this).parent().toggleClass('open');       
      $(this).parent().toggleClass('closed');
      // if( $(this).parent().hasClass('closed') ){
      //   //tween background-image color from fff to 000
      //   TweenMax.fromTo( $('#hamburger'), 0.1, {fill: "rgb(255,0,255)"}, {fill: "rgb(0,51,0)"});
      // }
      // else {
      //   TweenMax.fromTo( $('#hamburger'), 0.1, {fill: "rgb(0,51,0)"}, {fill: "rgb(255,0,255)"});
      // }
    });

    // More Details toggle for resume items
    $('.more-details h5 span').click(function(){
        var link = $(this);
        $(this).parent().parent().children('ul').stop().slideToggle('slow', function() {
            if ($(this).is(':visible')) {
                 link.text('Show Less');
                 $(this).parent().parent().removeClass('hidden');
            } else {
                 link.text('More Details');
                 $(this).parent().parent().addClass('hidden');
            }
        });       
    });

    $( ".more-details h5" ).on( "click", function() {
        $(this).parent().toggleClass('hidden');
    });

    //header lock
    var stickyOffset = $('.sticky').offset().top;
    $(window).scroll(function(){
      var sticky = $('.sticky'),
          scroll = $(window).scrollTop();
      if (scroll >= stickyOffset) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });

    //scroll to top
    $('#toTop').click(function(){
        $('#body').animate({
            scrollTop: 0
        }, 1500);
    });

});//end doc.ready