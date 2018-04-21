// JavaScript Document
var colorArray=new Array("#000000","#FF0000","#00FF00","#0000FF","#FFFF00","#00FFFF","FF00FF","#C0C0C0","#FFFFFF");
var n=0;
var timeout;
function updatebgcolor()
{
	document.body.style.backgroundColor=colorArray[n];
	n++;
	if(n>=9)
	{
		n=0;
	}
	timeout=setTimeout("updatebgcolor()",3000);
}