$(document).ready(function() {
    console.log("hioamod.js");

    // add indication in menu of selected page on my accounts page

    if ($('body').hasClass('MyAccount') && $('li#exlidMyAccountTab').hasClass('EXLMyAccountSelectedTab')) {
        $('li#exlidMyAccount').addClass('selectedPage')
    }

    if ($('body').hasClass('MyAccount') && $('li#exlidEshelfTab').hasClass('EXLMyAccountSelectedTab')) {
        $('li#exlidMyShelf').addClass('selectedPage')
    }

});
