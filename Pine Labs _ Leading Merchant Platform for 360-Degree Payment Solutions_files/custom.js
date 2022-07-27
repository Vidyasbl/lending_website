jQuery(document).ready(function($) {
    /*header*/

$(".scroll-down-arrow").click(function() {
    var av1= $("section").attr('class').split(' ')[0];
    var av= $("section."+av1).next().attr('class').split(' ')[0];
    
     $([document.documentElement, document.body]).animate({
        scrollTop: $("section."+av).offset().top-80
    }, 2000);
    //alert(av);
});
    
$(window).scroll(function(){  
     if ($(this).scrollTop() >= 70) {
        $('.header').addClass("sticky-top");
	 }
	 else{ $('.header').removeClass("sticky-top");}
});
	
  $('.navbarrightmenu .navbar-toggler.collapsed').on('click', function () {
	 $(this).toggleClass('active');
    $('.navbarrightmenu .animated-icon').toggleClass('open');
	 $('body').toggleClass('body-push');
  });
  $(".navbar-toggler.collapsed").on('click', function () {
	 $(this).toggleClass('active');
    $('.navbar-toggler .animated-icon').toggleClass('openheader');
	  $('.header').toggleClass('navbar-sticky');	
  });
  
  
	$("#left_arrow").on('click', function () {
		$("#accordion div.collapse").removeClass("show");
	});	
	
     $('.header .navbar-nav .nav-link').on('click', function () {	
   $('.backmenu-btn').removeClass("active");
    $('.backmenu-btn').addClass("active");
  });
   $('.backmenu-btn').on('click', function () {	
      $(this).removeClass("active");
  });
    $('.menu-accordion-item-head h4').on('click', function () {	
    $('.backmenu-btn').addClass("active");
  });

 $(".mobile-hamburger-menu .navbar-toggler").on('click', function () {	
    $('#left_arrow').removeClass("active");
	  $("#accordion div.collapse").removeClass("show");
   });
	
$(".web-hov-buttons #newtopinelabs").hover(
  function () {
	   $(this).removeClass("btn-secondary-green");
    $(this).addClass("btn-primary-green  signup btn-arrow").html('Get Started<span class=""></span>');
  },
  function () {
    $(this).removeClass("btn-primary-green signup btn-arrow").html('New to Pine Labs?');
	  $(this).addClass("btn-secondary-green");
  }
);

$(".web-hov-buttons #alreadywithpinelabs").hover(
  function () {
	     $(this).removeClass("btn-secondary-blue");
    $(this).addClass("btn-primary-blue getmore btn-arrow").html('Get More<span class=""></span>');
  },
  function () {
    $(this).removeClass("btn-primary-blue getmore btn-arrow").html('Already with Pine Labs?');
		     $(this).addClass("btn-secondary-blue");
  }
);

$(".nav.nav-tabs li:last-child").not('#myPartnerTab li:last-child').click(function(){
event.preventDefault();
$('.nav.nav-tabs').animate({
scrollLeft: "135"
}, "slow");
});
$(".nav.nav-tabs li:first-child").not('#myPartnerTab li:first-child').next().click(function(){
event.preventDefault();
$('.nav.nav-tabs').animate({
scrollLeft: "-135"
}, "slow");
});
      

});
//893<=926 active
