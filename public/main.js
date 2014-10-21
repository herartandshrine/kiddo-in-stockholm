// on DOM ready
$(function () {
  // A doc to jQuery
  // http://oscarotero.com/jquery/

  // We group all things related to the menu in the menu object
  var menu = {
    // we prefix variable with a $ to give us a hint that's a jQuery element
    $openButton: $('.js-open-menu'),
    $closeButton: $('.js-close-menu'),
    $nav: $('.js-open-menu-target'),
    openClass: 'is-open',
    open: function (event) {
      menu.$nav.addClass(menu.openClass);
    },
    close: function (event) {
      menu.$nav.removeClass(menu.openClass);
    },
    init: function () {
      menu.$openButton.on('click', menu.open);
      menu.$closeButton.on('click', menu.close);
    }
  };
  // Launch the menu behaviour
  menu.init();
});
