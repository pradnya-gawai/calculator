function display(val)
{
	 document.getElementById("textval").value+=val

}
function clr()
{
 document.getElementById("textval").value = "";
}
function evaluate()
{
 var x = document.getElementById("textval").value
 var y = eval(x)
 document.getElementById("textval").value = y
}