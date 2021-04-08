
function casuale() {
	var num_mio=Math.round(Math.random()*5+1);
	var num_computer=Math.round(Math.random()*5+1);
			
	document.getElementById("numero1").innerHTML = num_mio;
	document.getElementById("numero2").innerHTML = num_computer;

			
	if(num_mio > num_computer){
           document.getElementById("risultato").innerHTML = "COMPLIMENTI! HAI VINTO!";
           document.getElementById('risultato').style.color = '#4b0082';

/*            function blink_one() {
            document.getElementById('risultato').style.visibility='visible';
            setTimeout('blink_two()',1000);
            }
            function blink_two() {
            document.getElementById('risultato').style.visibility='hidden';
            setTimeout('blink_one()',1000);
            }
            blink_one(); */
           

  }else if(num_mio === num_computer){
           document.getElementById("risultato").innerHTML = "Per questa volta abbiamo un pareggio..ritenta sarai più fortunato!";         
           document.getElementById('risultato').style.color = '#0000cd';
	}else{
	   document.getElementById("risultato").innerHTML = "PECCATO...HAI PERSO!";
     document.getElementById('risultato').style.color = '#800000';}

};

function blink_one() {
  document.getElementById('risultato').style.visibility='visible';
  setTimeout('blink_two()',1000);
  }
  function blink_two() {
  document.getElementById('risultato').style.visibility='hidden';
  setTimeout('blink_one()',500);
  }
  blink_one();