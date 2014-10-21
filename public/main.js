// $(function () {…}) mean on DOM ready
// It just leave the time for the browser to render all markup so we can interact with it
// Also this will act as a closure so `var menu` is invisible outside this function
$(function () {
  // A small doc to jQuery
  // http://oscarotero.com/jquery/

  // We group all things related to the menu in the menu object
  // It will be easier in the future to gather everything related to the menu here
  var menu = {
    // we prefix variable with a $ to give us a hint that's a jQuery element
    $openButton:  $('.js-open-menu'),
    $closeButton: $('.js-close-menu'),
    $nav:         $('.js-open-menu-target'),
    // This is to not repeat manually the “state open” class
    // It will be easier to change if we need to in the future
    openClass: 'is-open',
    // Those are our callback functions
    // event is the parameter given by jQuery to the callback function
    // We don't use it right now, but it's acting as a reminder for us that's an event callback function
    open: function (event) {
      menu.$nav.addClass(menu.openClass);
    },
    close: function (event) {
      menu.$nav.removeClass(menu.openClass);
    },
    // We group here everything that make the menu working
    init: function () {
      menu.$openButton.on('click', menu.open);
      menu.$closeButton.on('click', menu.close);
    }
  };
  // Launch the menu behaviour
  menu.init();
});
