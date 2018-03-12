var count = 2;
// var img1 = document.getElementById("img1");
var upload = document.getElementById("upload");
upload.addEventListener("click",showimage)
function showimage(){
	
	var m_left_bottom = document.getElementById("m_left_bottom");
	photoDiv = document.createElement("div");
	m_left_bottom.appendChild(photoDiv);
	photoDiv.id = "div"+count;
	photoDiv.className = "photoblog"; 

	photoImg = document.createElement("img");
	photoDiv.appendChild(photoImg); 
	photoImg.id = "img"+count;
	var photoId = document.getElementById(photoImg.id);
	photoId.src = window.webkitURL.createObjectURL(document.getElementById("choose").files[0]);
	count += 1;
}
