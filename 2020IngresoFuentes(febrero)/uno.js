
function mostrar()
{
	//Debemos realizar la carga de 5(cinco) productos de prevención de contagio, 
//de cada una debo obtener los siguientes datos: 
//el tipo (validar "barbijo" , "jabón" o "alcohol") , 
//el precio (validar entre 100 y 300),
//la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), 
//la Marca y el fabricante. 
//Se debe Informar al usuario lo siguiente:
//a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
//b) Del ítem con más unidades, el fabricante 
//c) Cuántas unidades de jabones hay en total 
   var i;
   var tipoMaxcantidad;
   var tipoMaxMarca;
   var barbijoMaxPrecio;
   var barbijoMaxMarca;
   var barbijoMaxCantidad;
   var acumuladorDeJabones=0;
 


	for(i=0;i<2;i++)
	{
		var tipo=prompt("barbijo , jabon o alcohol :");
		while(!isNaN(tipo)||tipo!="barbijo"&&tipo!="jabon"&&tipo!="alcohol")
		{
			alert("no valido");
			tipo=prompt("barbijo , jabon o alcohol");
		}
	
							
		var precio=parseInt(prompt("entre 100$ y 300$ :"));
		while(isNaN(precio)||precio<=100||precio>300)
		{
			alert("no valido");
			precio=parseInt(prompt("entre 100$ y 300$ :"));
		}
		var cantidad=parseInt(prompt("cantidad:   \n (que allan menos de mil) "));
		while(isNaN(cantidad)||cantidad<=1||cantidad>=1000)
		{
			alert("no valido");
			cantidad=parseInt(prompt("que allan menos de mil :"));
		}
		
		var marca=prompt("maca tuco o marca evola :");
		while(!isNaN(marca)||marca!="tuco"&&marca!="evola")
		{
			alert("no valido");
			marca=prompt("maca tuco o marca evola :");
		}		 
	if(tipo=="barbijo")
		{
			barbijoMaxPrecio=precio;
			barbijoMaxMarca=marca;
			barbijoMaxCantidad=cantidad;           			
		}	
		if(tipo=="jabon")
		{
			acumuladorDeJabones=acumuladorDeJabones + cantidad;					   
		}			
	if(cantidad)
		{
				tipoMaxcantidad=cantidad;
				tipoMaxMarca=marca;

		}
				
	}		
	if(tipo=="barbijo")
	{
        alert("la cantidad del barbijo mas caro es :"+""+barbijoMaxCantidad+""+"y su marca es :"+""+barbijoMaxMarca);
	}
					while(cantidad!=cantidad)
				{
					alert("la marca de la cantidad max es :"+""+tipoMaxMarca);
					break
				}
				while(cantidad==cantidad)
				{
					alert("cantidades iguales");
					break
				}
	

	if(tipo=="jabon")
	{
    alert("Hay :"+""+acumuladorDeJabones);
	}
}
