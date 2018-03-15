var searchbox = document.getElementById("searchbox");
var middlebox = document.getElementById("middlebox");
var blocks = document.getElementsByClassName("blocks");
var searchenter = document.getElementById("searchenter");
var clear = document.getElementById("clear");
var article = document.getElementById("article");
var article2 = document.getElementById("article2");
var search = document.getElementById("search");
var about = document.getElementById("about");
var contact = document.getElementById("contact");
var nexttime = document.getElementById("nexttime");


searchenter.addEventListener("click",startsearch);
function startsearch(){
	var getlabel = document.getElementById("searchbox").value;
	if (getlabel == "Asia" || getlabel == "asia"){
		for(i = 0; i <= 5; i++){
			blocks[i].style.display = "none";
			blocks[0].style.display = "block";
			blocks[0].style.left = 100 + "px";
		}		
	}else if(getlabel == "Africa" || getlabel == "africa"){
		for(i = 0; i <= 5; i++){
			blocks[i].style.display = "none";
			blocks[1].style.display = "block";
			blocks[1].style.left = 100 + "px";
		}	
	}else if(getlabel == "north america" || getlabel == "North America"){
		for(i = 0; i <= 5; i++){
			blocks[i].style.display = "none";
			blocks[2].style.display = "block";
			blocks[2].style.left = 100 + "px";
		}	
	}else if(getlabel == "south america" || getlabel == "South America"){
		for(i = 0; i <= 5; i++){
			blocks[i].style.display = "none";
			blocks[3].style.display = "block";
			blocks[3].style.left = 100 + "px";
		}	
	}else if(getlabel == "Europe" || getlabel == "europe"){
		for(i = 0; i <= 5; i++){
			blocks[i].style.display = "none";
			blocks[4].style.display = "block";
			blocks[4].style.left = 100 + "px";
		}	
	}else if(getlabel == "Australia" || getlabel == "australia"){
		for(i = 0; i <= 5; i++){
			blocks[i].style.display = "none";
			blocks[5].style.display = "block";
			blocks[5].style.left = 100 + "px";
		}	
	}else{
		alert("Sorry, we do not have this continents. Plese enter world continents like: Asia, Africa, Australia......");
	}	
}
clear.addEventListener("click",clearfilter);
function clearfilter(){
	for(i = 0; i <= 5; i++){
			blocks[i].style.display = "block";
		}	
}
search.addEventListener("click",showBox);
function showBox(){
    if(middlebox.style.display == "none"){
        middlebox.style.display = "block";
        article2.style.display = "none";
        article.style.display = "none";

    }else{
        middlebox.style.display = "none";
    }
}
contact.addEventListener("click", showarticle);
function showarticle(){
	if(article.style.display == "block"){
		article.style.display = "none";
	}else{
		article.style.display = "block";
		article2.style.display = "none";
		middlebox.style.display = "none";
	}	
}
about.addEventListener("click", showarticle2);
function showarticle2(){
	if(article2.style.display == "block"){
		article2.style.display = "none";
	}else{
		article2.style.display = "block";
		article.style.display = "none";
		middlebox.style.display = "none";
	}	
}
nexttime.addEventListener("click",hidden);
function hidden(){
	article.style.display = "none";
}







































