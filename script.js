var exp =document.getElementById("textval")
/**/
const display=(val) =>exp.value+=val

/*All Clear  Function*/
const clr= () =>exp.value=''
const myempty=()=>exp.value='';

/*Evaluteting Expression*/
const ans =()=>{
	var x = exp.value
 	const re = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
 try{
 	if(re.test(x)){
 		exp.value = eval(x)
 	}
 	else {
 		exp.value = "Error!";

 	}}
 catch(err){
 		console.log(err);
 	}
 }
 function play() {
        var audio = document.getElementById("audio");
        audio.play();

      }
 
