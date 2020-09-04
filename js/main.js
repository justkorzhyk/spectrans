
$(function() {
	$('.btn-ghost').click(function (e) {
		e.preventDefault();
		$('.cities__more').toggleClass('.cities__visible')
	});
  });
	
 	var $page = $('html, body');
	$('.btn').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    return false;
	});

	var $page = $('html, body');
	$('a.arrow1').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    return false;
	});

	var $page = $('html, body');
	$('.item').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    return false;
	});

  	$('a.myLinkModal').click( function(event){
    event.preventDefault();
    $('.myOverlay').fadeIn(297,	function(){
      $('.myModal') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });

  $('.myModal__close, .myOverlay').click( function(){
    $('.myModal').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('.myOverlay').fadeOut(297);
    });
  });

  $(window).scroll(function() {
	    $('#trip .container').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});

   $(window).scroll(function() {
	    $('#about .container').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});
	 $(window).scroll(function() {
	    $('#contacts .container').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});




