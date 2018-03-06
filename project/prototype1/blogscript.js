var blockNumbers = 0;
function init(){
    var slider = document.getElementById("down");
    var sliderWidth = slider.clientWidth;
    var blocks = document.getElementsByClassName("blocks");
    if (sliderWidth >=1000)
    {
        blockNumbers = 4;
    }
    else if(sliderWidth <1000 && sliderWidth >=800)
    {
        blockNumbers = 3;
    }
    else if(sliderWidth <800 && sliderWidth >=600)
    {
        blockNumbers = 2;
    }
    else if(sliderWidth <600 && sliderWidth >=400)
    {
        blockNumbers = 2;
    }
    var tmp = 0;
    var space = (sliderWidth - blockNumbers*300) / blockNumbers;
    for (i = 0; i < blocks.length; i++) {
        blocks[i].style.left = tmp + "px";
        tmp = tmp + space;
    }
}
var r_button = document.getElementById("r_button");
var l_button = document.getElementById("l_button");
r_button.addEventListener("click",moveNext);
l_button.addEventListener("click",movePre);
function moveNext() {
    var blocks = document.getElementsByClassName("blocks");
    var slider = document.getElementById("down");
    var sliderWidth = slider.clientWidth;
    var space = (sliderWidth - blockNumbers*300) / blockNumbers;
    var leftMost = 300*10+9*space; // length of ten boxes + spacing + padding

    if(parseInt(blocks[0].style.left) > (-leftMost + sliderWidth) ){
      for (i = 0; i < blocks.length; i++) {
          blocks[i].style.left = (parseInt(blocks[i].style.left) - 300 - space) + "px";
        }
    }
}

function movePre() {
    var blocks = document.getElementsByClassName("blocks");
    var slider = document.getElementById("down");
    var sliderWidth = slider.clientWidth;
    var space = (sliderWidth - blockNumbers*300) / blockNumbers;
    if(parseInt(blocks[0].style.left) < 0 ){
      for (i = 0; i < blocks.length; i++) {
          blocks[i].style.left = (parseInt(blocks[i].style.left) + 300 + space) + "px";
        }
    }

}
