
$(document).on('click', '.toggle', function(e) {
  var navClass = $('#my-nav').get( 0 ).className;
  if(navClass == "main-nav"){
  	$('#my-nav').removeClass('main-nav').addClass('mobile-main-nav');
  	$('.nav-items').removeClass('nav-items').addClass('mobile-nav-items');
  }else{
  	$('#my-nav').removeClass('mobile-main-nav').addClass('main-nav');
  	$('.mobile-nav-items').removeClass('mobile-nav-items').addClass('nav-items');
  }
});