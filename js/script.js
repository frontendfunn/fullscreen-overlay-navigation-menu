$(document).ready(function() {
  var setMenuHeight = function() {
    $('.menuWrapper').slimscroll({
      height: document.documentElement.clientHeight - 56
    });
  };

  $('.trigger').on('click', function() {
    $('.menuContainer').toggleClass('active');
  });

  setMenuHeight();
  $(window).resize(function() {
    setMenuHeight();
  });
});
