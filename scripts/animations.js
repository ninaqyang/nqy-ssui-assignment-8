$(function() {
  console.log("dom finished loading")

  $(".companyContainer").on('click', function() {
    console.log("company container clicked")

    var clickedIdentifier = $(this).attr('id');
    var pageIdentifier = clickedIdentifier.replace('Timeline','');

    $('html,body').animate({
        scrollTop: $("#" + pageIdentifier).offset().top
      },
      2000);
  });

  $(".downArrow").on('click', function() {
    console.log("down arrow clicked")

    var clickedIdentifier = $(this).find('img').attr('id');
    var pageIdentifier = clickedIdentifier.replace('GoTo','');

    $('html,body').animate({
        scrollTop: $("#" + pageIdentifier).offset().top
      },
      'slow');
  });

  $.scrollify({
    section: ".page",
    easing: "easeOutExpo",
    scrollSpeed: 1100
  });

});
