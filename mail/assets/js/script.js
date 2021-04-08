var mails = [
  "giovannarossi@yahoo.it",
  "pietrobianchi@gmail.com",
  "paolodivani@libero.it",
  "fabiotestone@yahoo.com",
  "pastaasciutta@gmail.com",
  "arrostoalforno@libero.it",
  "fragolinarossa@gmail.com",
  "IsabellaNita@yahoo.it",
  "matteobiraghi@libero.it",
  "annafessas@gmail.it"
]

var mails_to_found = prompt('Inserisci qui la tua e-mail')

var accesso = false;

for (var i=0; i<mails.length; i++){
  var mails_scritta = mails[i]
  console.log(mails_scritta)
  if(mails_scritta === mails_to_found){
    accesso = true
    console.log("accesso autorizzato");
    break;
  }
}

if(accesso){
  document.getElementById('testo').innerHTML = "Hai diritto ad accedere. <br>La tua email è presente nel nostro database";
  document.getElementById('testo').style.color = '#fffafa';
  document.getElementById('div').style.backgroundColor = "#dda0dd";

}else{
  document.getElementById('testo').innerHTML = "Non hai diritto ad accedere. <br>La tua email non è presente nel nostro database."
}