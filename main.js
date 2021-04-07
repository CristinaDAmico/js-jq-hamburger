// REFERENZE

var hamburger = $('.fa-bars');
var menu = $('.hamburger-menu');
var end = $('.fa-times');

// Cliccando su hamburger si apre il menu.
hamburger.click( function() {
    menu.show();
});

// Cliccando su end scompare il menu.
end.click( function() {
    menu.hide();
});