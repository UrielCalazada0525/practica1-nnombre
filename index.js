fuction getIMC(){
  var peso=parceFloat(document.getElementById(´Peso´).value);
  var altura=parseFloat(document.getElementById(´Altura´).value);
  var imc= peso/(altura+altura) 
  document.getElementbyId("imc").innerHTML=imc;
}
 
