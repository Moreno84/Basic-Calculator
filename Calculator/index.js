document.getElementById("myBtn").addEventListener('click',calculadora,false);

function calculadora(){
   let valor1 = parseFloat(document.getElementById("input1").value);
   let valor2 = parseFloat(document.getElementById("input2").value);

   let resultado = valor1 + valor2;

   document.getElementById("resultado").value=resultado;


}

