(function() {



})();




$(function()
{
  $('h1').each(function(){
      var txt = $(this).text();
      var html = '';
      for (t in txt)
      {
          html = html + '<span>' + txt[t] + '</span>';
      }
      $(this).html(html);
    });
});

var lettercount = 0
var blurred = true

$(document).ready(function() {
  var mX, mY, distance,
      element  = $("path, polygon");

  function calculateDistance(elem, mouseX, mouseY) {
      var rleft = elem.getBoundingClientRect().left;
      var rwidth = elem.getBoundingClientRect().width;
      var rtop = elem.getBoundingClientRect().top;
      var rheight = elem.getBoundingClientRect().height;
      return Math.floor(Math.sqrt(Math.pow(mouseX - (rleft+(rwidth/2)), 2) + Math.pow(mouseY - (rtop+(rheight/2)), 2)));
  }


  $(document).mousemove(function(e) {
    if (blurred) {

      mX = e.pageX;
      mY = e.pageY;
      distance = calculateDistance($('svg')[0], mX, mY);
      // console.log(distance);
      var ropacity = 250/distance;
      element.css("opacity", ropacity);
    };
  });


  $("path, polygon").mouseenter(function() {
    if ($(this).css('fill') == "rgb(255, 255, 255)") {
      blurred = false;
      lettercount += 1;
    }
    $(this).css('fill', '#4a6938');
    $(this).css('filter', 'none');
    if (lettercount == 7) {
      $('#headerdesc').fadeIn('slow');
    }
  });
  $("path, polygon").mouseleave(function() {
    $(this).css('fill', '#4a6938');

  });
});
