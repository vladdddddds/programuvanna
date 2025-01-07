$(document).ready(function () {
    var animatedBlock = $("#animatedBlock");
    $(animatedBlock).animate({
       opacity: 0.25,
       width: "300px",
       height: "300px"
    }, {
       duration: 5000,
       easing: "swing",
       complete: function () {
          $(this).animate({
             opacity: 1,
             width: "300px",
             height: "200px"
          }, {
             duration: 5000,
             easing: "swing",
             complete: function () {
                alert("Анімація завершена!");
             }
          });
       }
    });
    // *************************************************
    $("#Element, #Element1, #Element2").hide();
    $("#Element")
       .delay(1000)
       .fadeIn(1000)
       .delay(2000)
       .fadeOut(1000, function () {
          $("#Element1")
             .slideDown(1000)
             .delay(2000)
             .slideUp(1000, function () {
                $("#Element2").show().animate({ backgroundColor: 'purple' }, 1000);
             });
       });
 });