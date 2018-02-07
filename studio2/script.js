// var sectiondiv = document.getElementById('sectiondiv');
// sectiondiv.addEventListener('click',function(){
// 	sectiondiv.style.backgroundColor = "blue";
// })
var glass = document.getElementById('glass');
var lipstick = document.getElementById('lipstick');
var blash = document.getElementById('blash');
var makeup = document.getElementById('makeup');
var myphoto = document.getElementById('myphoto');
var speak = document.getElementById('speak');
var face = document.getElementById('face');

var image5 = document.getElementById('image5');
var image6 = document.getElementById('image6');
var image7 = document.getElementById('image7');
var image8 = document.getElementById('image8');

glass.addEventListener('click',function(){
	 if (glass.checked == true){
	 	myphoto.src = "images/1_2.png";
	 	speak.innerHTML= "I don't like eyeglass!!!!!";
	 	face.src = "images/face/2.jpg";
	 	image5.style.width = "80%";
	 	image6.style.display = "none";
	 	image7.style.display = "none";
	 	image8.style.display = "none";
	 }else{
	 	myphoto.src = "images/1_1.png";
	 	speak.innerHTML = "I want to hang out! Help me makeup please!";
	 	face.src = "images/face/1.jpg";
	 	image5.style.width = "40%";
	 	image6.style.display = "block";
	 	image7.style.display = "block";
	 	image8.style.display = "block";
	 }
})

lipstick.addEventListener('click',function(){
	 if (lipstick.checked == true){
	 	myphoto.src = "images/2_2.png";
	 	speak.innerHTML= "I like this lipstick color!";
	 	face.src = "images/face/3.jpg";
	 	image7.style.width = "80%";
	 	image5.style.display = "none";
	 	image6.style.display = "none";
	 	image8.style.display = "none";
	 }else{
	 	myphoto.src = "images/1_1.png";
	 	speak.innerHTML = "I want to hang out! Help me makeup please!";
	 	face.src = "images/face/1.jpg";
	 	image7.style.width = "40%";
	 	image6.style.display = "block";
	 	image5.style.display = "block";
	 	image8.style.display = "block";
	 }
})

blash.addEventListener('click',function(){
	 if (blash.checked == true){
	 	myphoto.src = "images/2_1.png";
	 	speak.innerHTML= "Blush looks not bad~~~";
	 	face.src = "images/face/4.jpg";
	 	image6.style.width = "80%";
	 	image5.style.display = "none";
	 	image7.style.display = "none";
	 	image8.style.display = "none";
	 }else{
	 	myphoto.src = "images/1_1.png";
	 	speak.innerHTML = "I want to hang out! Help me makeup please!";
	 	face.src = "images/face/1.jpg";
	 	image6.style.width = "40%";
	 	image5.style.display = "block";
	 	image7.style.display = "block";
	 	image8.style.display = "block";
	 }
})

makeup.addEventListener('click',function(){
	 if (makeup.checked == true){
	 	myphoto.src = "images/4.png";
	 	speak.innerHTML= "Thank you very much, I like my makeup!";
	 	face.src = "images/face/5.jpg";
	 	image8.style.width = "80%";
	 	image5.style.display = "none";
	 	image7.style.display = "none";
	 	image6.style.display = "none";
	 }else{
	 	myphoto.src = "images/1_1.png";
	 	speak.innerHTML = "I want to hang out! Help me makeup please!";
	 	face.src = "images/face/1.jpg";
	 	image8.style.width = "40%";
	 	image6.style.display = "block";
	 	image7.style.display = "block";
	 	image5.style.display = "block";
	 }
})


























