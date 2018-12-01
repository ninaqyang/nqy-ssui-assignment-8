//Minimize timeline and stick to top of page

// function stickTimelineToTop() {
//   var window_top = $(window).scrollTop();
//   var top = $('.timelineSticky').offset().top;
//   if (window_top > top) {
//     $('.timelineContent').addClass('stick');
//     $('.timelineSticky').height($('.timelineContent').outerHeight());
//   } else {
//     $('.timelineContent').removeClass('stick');
//     $('.timelineSticky').height(0);
//   }
// }
//
// $(function() {
//   $(window).scroll(stickTimelineToTop);
//   stickTimelineToTop();
// });

// function goToPageByScroll(id) {
//   $('html,body').animate({
//       scrollTop: $("#" + id).offset().top
//     },
//     'fast');
// }

$(function() {
  console.log("dom finished loading")

  $(".companyContainer").on('click', function() {
    console.log("company container clicked")

    var clickedIdentifier = $(this).attr('id');
    var pageIdentifier = clickedIdentifier.replace('Timeline','');

    $('html,body').animate({
        scrollTop: $("#" + pageIdentifier).offset().top
      },
      'slow');
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
