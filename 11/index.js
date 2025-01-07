$(document).ready(function () {
    $("#chan").click(function () {
       $("#pChan").html("Це замінені<b> пагаграфи</b>");
       $("#pChan2").html("Це замінені<b> пагаграфи</b>");
    });
    // *************************************************
    $("#sStyle").click(function () {
       $("#pStyle").css({ "background-color": "blue", "font-size": "22px" });
       $("#pStyle1").css({ "background-color": "yellow", "font-size": "25px" });
       $("#pStyle2").css({ "background-color": "orange", "font-size": "28px" });
    });
    // *************************************************
    $("#sVal").click(function () {
       $("input:text").val("Артур Нерчук");
    });
    // *************************************************
    $("#sAttr").click(function () {
       $("#image").attr("width", "300");
    });
    // *************************************************
    $("#dAttr").click(function () {
       $("#image").removeAttr("width");
    });
    // *************************************************
    $("#pTo").click(function () {
       $("<b>Елемете доданий prependTo() </b>").prependTo("#pToP");
    });
    // *************************************************
    $("#eElem").click(function () {
       $("#div2").empty();
    });
    // *************************************************
    $("#dWidth").click(function () {
       $("#oWidth").text("Ширина зображеня: " + $("#image2").width());
    });
    // *************************************************
    $("#dPos").click(function () {
       let pos = $("#image2").position();
       $("#oPos").text("Позиція зверху: " + pos.top + " Позиція з ліва: " + pos.left);
    });
    // *************************************************
    $('#closestBtn').click(function () {
       $('p').closest('#task3').css({ "background-color": "lightblue", "border-radius": "10px" });
    });
    // *************************************************
    $('#mapBtn').click(function () {
       let items = $('p').map(function () {
          return $(this).text();
       }).get();
       alert(items.join(', '));
    });
    // *************************************************
    $('#prevAllBtn').click(function () {
       $('p').prevAll().css({ "color": "red", "border": "2px solid red" });
    });
    // *************************************************
    $('#endBtn').click(function () {
       $('p').css('font-weight', 'bold').end().css('border', '2px solid green');
    });
    // *************************************************
    $('#nextUntilBtn').click(function () {
       $("p.start").nextUntil("p.stop").css({ "color": "red", "font-style": "italic" });
    });
    // *************************************************
    $('#modifyClassBtn').click(function () {
       $('.modify').filter(function () {
          return true;
       }).css({
          'background-color': 'lightblue',
          'font-weight': 'bold'
       }).text('modify');
    });
    // *************************************************
    $('#modifyLiBtn').click(function () {
       $('li').filter(':nth-child(3n)').css({
          'background-color': 'lightgreen',
          'font-style': 'italic'
       }).text('modify');
    });
    // *************************************************
    $("#mergeButton").click(function () {
       let mergedText = $("#mergeResult").add("#mergeResult2").text();
       $("#mergeResult").text(mergedText);
       $("#mergeResult2").hide();
    });
    // *************************************************
    $("#trimstr").text("            Рядок з багатьма пробілами                ").show();
    $("#trimButton").click(function () {
       let trimmedText = $("#trimstr").text().trim();
       $("#trimstr").text(trimmedText);
    });
    // *************************************************
    $("#startAmimate").click(function () {
       $("#animatedElement").css({ 'position': 'absolute' })
       $("#animatedElement1").css({ 'position': 'absolute' })
       $("#animatedElement").animate(
          {
             opacity: 1,
             left: "200px",
             width: "+=70",
             height: "90px"
          },
          {
             duration: 5000,
             easing: "linear",
             complete: function () {
                $("#endRes").text("Кінець анаміції");
             },
             start: function () {
                $("#startRes").text("Початок анаміції");
             },
             step: function (now) {
                $("#posRes").text("Animation step: " + now);
             }
          }
       );
       // *************************************************
       $("#animatedElement1").animate(
          {
             opacity: 1,
             top: "+=90",
             left: "200px",
             width: "+=70",
             height: "90px"
          },
          {
             duration: 5000,
             easing: "linear",
             complete: function () {
                $("#endRes").text("Кінець анаміції");
             },
             start: function () {
                $("#startRes").text("Початок анаміції");
             },
             step: function (now) {
                $("#posRes").text("Animation step: " + now);
             }
          }
       );
    });
    // *************************************************
    $("#delay").click(function () {
       $("#box1").delay("slow").fadeIn();
       $("#box2").delay("fast").fadeIn();
       $("#box3").delay(800).fadeIn();
       $("#box4").delay(2000).fadeIn();
       $("#box5").delay(4000).fadeIn();
    });
    // *************************************************
    $("#hide").click(function () {
       $("#box1").delay("slow").hide();
       $("#box2").delay("fast").hide();
       $("#box3").delay(800).hide();
       $("#box4").delay(2000).hide();
       $("#box5").delay(4000).hide();
 
    });
 });