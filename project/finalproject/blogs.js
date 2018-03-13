var count = 2;
// var img1 = document.getElementById("img1");
var upload = document.getElementById("upload");
upload.addEventListener("click",creatdiv);
function creatdiv(){	
	var m_left_bottom = document.getElementById("m_left_bottom");
	photoDiv = document.createElement("div");
	m_left_bottom.appendChild(photoDiv);
	photoDiv.id = "div" + count;
	photoDiv.className = "photoblog"; 

	photoImg = document.createElement("img");
	photoDiv.appendChild(photoImg); 
	photoImg.id = "img"+count;
	var photoId = document.getElementById(photoImg.id);
	photoId.src = window.URL.createObjectURL(document.getElementById("choose").files[0]);

	photoTags = document.createElement("div");
	photoDiv.appendChild(photoTags); 
	photoTags.className = "tag";
	photoTags.id = "tag" + count;

	tagInput = document.createElement("input");
	photoDiv.appendChild(tagInput);
	tagInput.className = "inputtag";
	tagInput.id = "inputtag" + count;
	tagInput.placeholder = "enter tags"

	tagButton = document.createElement("button");
	photoDiv.appendChild(tagButton);
	tagButton.className = "add";
	tagButton.id = "add" + count;
	tagButton.innerHTML = "Add";
	tagButton_id = tagButton.id;
	tagButton.setAttribute("onclick", "showtag(this.id)");
	// tagButton_id.setAttribute = ("onclick", showtag(tagButton.id));

	count += 1;

	// AIzaSyAsjKKuNVOSumDO2kpa2XUdnbQk_RGp-ME
	// var APIrequest = require('request');
	// APIurl = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAsjKKuNVOSumDO2kpa2XUdnbQk_RGp-ME';
	// requestObject = {
	//           "requests": [
	//             {
	//               "image":{
	//                     "source": {photoId.src}
	//                 },
	//               "features": [{ "type": "LABEL_DETECTION" }]
	//             }
	//           ]
	//         }
	// APIrequest(
	//             { // HTTP header stuff
	//                 url: APIurl,
	//                 method: "POST",
	//                 headers: {"content-type": "application/json"},
	//                 // stringifies object and puts into HTTP request body as JSON
	//                 json: requestObject,
	//             },APIcallback);

}

// var tag = document.getElementsByClassName("tag");
// button.addEventListener("click",showtag(this.id));
// function showtag(click_id){
// 	alert(click_id);
	
// 	// var p = document.createElement("p");
// 	// tag.appendChild(tagButton);
// 	// tag.innerHTML = inputtag.value;
//}
// var button = document.getElementsByClassName("add");
// button[0].addEventListener("click",showtag);
function showtag(click_id){
	var inputtag_id = "inputtag" + click_id.slice(-1);
	var getlabel = document.getElementById(inputtag_id).value;

	var tag_id = "tag" + click_id.slice(-1);
	var tag = document.getElementById(tag_id);

	var p = document.createElement("p");
	p.innerHTML = getlabel;
	p.className = "myp";
	myp = document.getElementsByClassName("myp");
	var temp = true;
	for(i = 0; i < myp.length; i++){
		if(myp[i].innerText == getlabel){
			temp = false;
			break;
		}			
	}
	if(p.innerHTML == ""){
			alert("please enter your tags belong to this photo's festival");
	}else if(temp == false){
		alert("We already have this tag.");
		document.getElementById(inputtag_id).value = "";
	}else{		
			tag.appendChild(p);	
			document.getElementById(inputtag_id).value = "";
	}

	
}

















