function mostrar()
{
//Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar comida al por mayor , hasta que el cliente quiera: 
//peso (entre 10 y 1000)en kilo, 
//precio por kilo (más de cero ), 
//tipo validad("v";"a";"m")(vegetal,animal o mezcla ) 
//Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar. 
//Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.	
//a) El importe total a pagar , bruto sin descuento y... 
//b) el importe total a pagar con descuento(solo si corresponde) 
//d) Informar el tipo de alimento más caro.	
//f) El promedio de precio por kilo en total

var compra=prompt("que compra? \nVegetal(v),Animal(a) o Mezcla(m)? :");
      while(isNaN(compra)||compra!="v"||compra!="a"||compra!="m")
      {
        alert("consumible no encontrado");
        compra=prompt("Vegetal(v),Animal(a) o Mezcla(m)? :");
      }
var peso=parseInt(prompt("el peso del producto? :\n(Entre 10 y 1000 kilos)"));
      while(!isNaN(peso)||peso<=10||peso>=100)
      {
        alert("el peso es menor a 10 o mayor a 100");
        peso=parseInt(prompt("intentelo de nuevo :\n(Entre 10 y 1000 kilos)"));
      }
var precioPorKilo=parseInt(prompt("el peso por kilo :\n(mas que 0)"));
      while(!isNaN(precioPorKilo)||precioPorKilo<=0)
      {
        alert("dijito no valido");
        precioPorKilo=parseInt(prompt("el peso por kilo :\n(mas que 0)"));
      }
      

}
