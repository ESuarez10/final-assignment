$("#menu-toggle").click(function () {
    $("#menu").slideToggle(200);
  });
  
  $(window).resize(function () {
    console.log(window.innerWidth);
  
    if (window.innerWidth < 660) {
      $("#menu").hide();
    } else {
      $("#menu").show();
    }
  });
