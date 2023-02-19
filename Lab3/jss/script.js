function info(){
	document.getElementById("tigerinfo").style.display="block";
}
function play(x){
	var audio = document.getElementById("audio"+x);
	audio.play();
}
function popupfunction(x)
{
	document.getElementById('popup'+x).style.display='block';
	document.getElementById('fade'+x).style.display='block';
}
function popupcartfunction(x){
	document.getElementById('popup'+x).style.display='block';
	document.getElementById('fade'+x).style.display='block';
}

function popupclose(x)
{
	document.getElementById('popup'+x).style.display='none';
	document.getElementById('fade'+x).style.display='none';
}
function addToCart(x)
{
	alert(x + " Successfully Added to Favorites!");
	document.getElementById("popup0").innerHTML+="<br>"+x;
}