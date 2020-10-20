
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

var isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/)); // @todo user agent matching is not ideal
if (isMobile) {
    $("#header-row").toggleClass("when-on-mobile");
    $(".header-text-block-verbose-text").toggleClass("when-on-mobile");
    $("#header-text-block-title-text").toggleClass("when-on-mobile");
}

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
	    
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	    if (target.length) {
		$('html,body').animate({
		    scrollTop: target.offset().top
		}, 1000);
		return false;
	    }
	}
	return false;
    });
});
