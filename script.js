function display(val)
{
	 document.getElementById("textval").value+=val

}
function clr()
{
 document.getElementById("textval").value ="0";
}
function ans()
{
 var x = document.getElementById("textval").value
 // var y = 
 document.getElementById("textval").value = eval(x)
}