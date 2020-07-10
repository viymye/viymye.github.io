var stickerwidth = $("#sublimesticker").width();
var mainmargins = ($(window).width() - $(".main").width())/2;

var boxDims = new Array();

// var helement = $(".main .header")
// var hbox = {
//   top: parseInt(window.getComputedStyle(helement[0]).top),
//   left: parseInt(window.getComputedStyle(helement[0]).left) + parseInt(helement.css("marginLeft")) - mainmargins,
//   width: parseInt(window.getComputedStyle(helement[0]).width),
//   height: parseInt(window.getComputedStyle(helement[0]).height)
// }
// boxDims.push(hbox);

var stickernum = 0
function setRandomPos(elements,x,dx){
  elements.each(function(){
    stickernum +=1
    var conflict = true;
    var conflictcount = 0
    while (conflict) {
        if (conflictcount > 10) {
          $(this).css('display','none');
          console.log('whodsjflasdf');
          break;
        }
        conflictcount += 1
        fixLeft= Math.floor(Math.random() * $(".main").width() + mainmargins - (stickerwidth/2) );
        fixTop = Math.floor(Math.random() * (($(window).height()-100) - 100 + 1)) ;
        $(this).offset({
            left: fixLeft,
            top: fixTop
        });
        var box = {
            top: parseInt(window.getComputedStyle($(this)[0]).top),
            left: parseInt(window.getComputedStyle($(this)[0]).left),
            width: parseInt(window.getComputedStyle($(this)[0]).width),
            height: parseInt(window.getComputedStyle($(this)[0]).height)
        }
        conflict = false;
        for (var i=0;i<boxDims.length;i++) {
            if (overlap(box,boxDims[i])) {
                conflict = true;
                break;
            } else {
                conflict = false;
            }
        }
    }
    if (conflictcount <= 10) {
      boxDims.push(box);
    };
  });
}

function overlap(box1,box2) {
  var ax1 = box1.left;
  var ay1 = box1.top;
  var ah = box1.height;
  var aw = box1.width;
  var ay2 = ay1 + ah;
  var ax2 = ax1 + aw;
  var bx1 = box2.left;
  var by1 = box2.top;
  var bh = box2.height;
  var bw = box2.width;
  var by2 = by1 + bh;
  var bx2 = bx1 + bw;

  // console.log("a: "+ax1+" "+ay1+" "+ax2+" "+ay2);
  // console.log("b: "+bx1+" "+by1+" "+bx2+" "+by2);
  // console.log(stickernum);

  var buf = 0;

  if ((ax1 < bx2) && (bx1 < ax2) && (ay1 < by2) && (by1 < by2)) {
    return true;
  }
  return false;

}


$( document ).ready(function() {
  setRandomPos($(".sticker"),40,40);
});
