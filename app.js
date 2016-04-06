// always need this function in jquery
$(document).ready(function(){

// this will change the background color to yellow when clicked
$( "li" ).on('click', function() {
    $(this).css("background-color","yellow");
});

//replace list item with "clicked!"
$(".nav").on('dblclick', function() {
	$(this).text( "clicked!");
});

//this will bring up an alert that says "clicked!" when the .nav class 
// $( ".nav" ).click(function() {
//   alert( "Clicked!" );
// });

//this will fade the opacity when moused over
$('.nav').on('mouseover', function() {
     $(this).fadeTo('slow', 0.25);
});	

//changing the opacity back
$('.nav').on('mouseleave', function() {
     $(this).fadeTo('slow', 1);
});
});




// one could change CSS properties in jquery
// var listItem = $('.nav');
// listItem.css('width');
// listItem.css('width', 200px);
// listItem.css('height');
// listItem.css('height', 50px);

