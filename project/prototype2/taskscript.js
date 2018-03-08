
var contact = document.getElementById("contact");
contact.addEventListener("click",visitPage);
function visitPage(){
        window.location.href='contact.html';
    }
var search = document.getElementById("search");
var filter = document.getElementById("filter");
var middlebox = document.getElementById("middlebox");
var middlebox2 = document.getElementById("middlebox2");
filter.addEventListener("click",showBox);
function showBox(){
    if(middlebox.style.display == "none"){
        middlebox.style.display = "block";
        middlebox2.style.display = "none";

    }else{
        middlebox.style.display = "none";
    }
}
search.addEventListener("click",showBox2);
function showBox2(){
	if(middlebox2.style.display == "none"){
		middlebox2.style.display = "block";
		middlebox.style.display = "none";
    }else{
        middlebox2.style.display = "none";
    }
}
var blocks = document.getElementsByClassName("blocks");
var searchenter = document.getElementById("searchenter");
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
		alert("Plese enter world continents like: Asia, Africa, North America, South America, Antarctica, Europe, or Australia");
	}
}
var enter = document.getElementById("enter");
enter.addEventListener("click",startfilter);
function startfilter(){
	var getlabel = document.getElementById("filterbox").value;
	if (getlabel == "Asia" || getlabel == "asia"){
		blocks[0].style.display = "none";
	}else if(getlabel == "Africa" || getlabel == "africa"){
		blocks[1].style.display = "none";
	}else if(getlabel == "north america" || getlabel == "North America"){
		blocks[2].style.display = "none";	
	}else if(getlabel == "south america" || getlabel == "South America"){
		blocks[3].style.display = "none";
	}else if(getlabel == "Europe" || getlabel == "europe"){
		blocks[4].style.display = "none";
	}else if(getlabel == "Australia" || getlabel == "australia"){
		blocks[5].style.display = "none";
	}else{
		alert("Plese enter world continents like: Asia, Africa, North America, South America, Antarctica, Europe, or Australia");
	}
}
var clear = document.getElementById("clear");
clear.addEventListener("click",clearfilter);
function clearfilter(){
	for(i = 0; i <= 5; i++){
			blocks[i].style.display = "block";
		}	
}






































