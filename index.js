var makeWinHeight = function(){
	var vh = $(window).height();
	var projects = vh/2 + vh/4;
	var main = projects * 2;
	$('#scene, .layer.gradient').height(vh);
	$('#scene .col a, #scene .col').height(projects);
	$('.layer.main').height(main);
}
$(document).ready(function(){
	makeWinHeight();

});
$(window).resize(function(){
	makeWinHeight();
});




var scene = document.getElementById('scene');
var parallax = new Parallax(scene);