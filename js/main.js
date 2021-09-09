$(document).ready(function () {
  $("body").addClass("bg");
  setTimeout(() => $("body").addClass("bg-transition"), 1200);
  $(window).scroll(function () {
    var windowPos = $(this).scrollTop();
    $(".fade").each(function (index) {
      var blockHeight = $(this).outerHeight();
      var blockPos = $(this).offset().top;
      var opacity = 1 - Math.abs((3 * (windowPos - blockPos)) / blockHeight);
      $(this).css("opacity", opacity);
    });

    $(".white").each(function (index) {
      var blockHeight = $(this).outerHeight();
      var blockPos = $(this).offset().top;
      var opacity = 1 - Math.abs((3 * (windowPos - blockPos)) / blockHeight);
      if (opacity > 0.2) {
        $("body").removeClass("bg");
      } else {
        $("body").addClass("bg");
      }
    });
  });
});
