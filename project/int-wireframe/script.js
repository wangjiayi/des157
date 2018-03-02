function moveNext() {

    var weatherBlocks = document.getElementsByClassName("forecasts");
    var weatherSlider = document.getElementById("down");
    var sliderBarWidth = weatherSlider.clientWidth;
    var space = (sliderBarWidth - blockNumbers*200) / blockNumbers;
    var leftMost = 200*10+9*space; // length of ten boxes + spacing + padding

    if(parseInt(weatherBlocks[0].style.left) > (-leftMost + sliderBarWidth) ){
      for (i = 0; i < weatherBlocks.length; i++) {
          weatherBlocks[i].style.left = (parseInt(weatherBlocks[i].style.left) - 200 - space) + "px";
        }
    }
}

function movePre() {
    var weatherBlocks = document.getElementsByClassName("forecasts");
    var weatherSlider = document.getElementById("down");
    var sliderBarWidth = weatherSlider.clientWidth;
    var space = (sliderBarWidth - blockNumbers*200) / blockNumbers;
    if(parseInt(weatherBlocks[0].style.left) < 0 ){
      for (i = 0; i < weatherBlocks.length; i++) {
          weatherBlocks[i].style.left = (parseInt(weatherBlocks[i].style.left) + 200 + space) + "px";
        }
    }

}