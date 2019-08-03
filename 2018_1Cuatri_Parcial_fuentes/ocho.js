function mostrar()
{
    var letra;
    var numero;
    var contador;
    var acumulador;
    var respuesta;

    do
    {
        letra=prompt("ingrese una letra");
        numero=prompt("ingrese un numero");
        numero=parseInt(numero);
        while(isNaN(numero) || numero>100 || numero<-100)         //validado
        {
            numero=prompt("ingrese numero entre -100 y 100");
            numero=parseInt(numero);
        }
        
        respuesta=prompt("ingrese si para continuar y no para terminar");
        
        while(respuesta!="no" && respuesta!="si");
        {
        respuesta=prompt("error, ingrese si, o no");                         //validado
        }
        
        
    }while(respuesta=="si")

    document.write("")

    
}



/*

SACAR MIMINO MAXIMO

var contador;
contador=0;
año=...;
color=...,
marca= ...;


while(contador<500)
{
    año
}

    if (contador==0)
    {
        mayoraño=año;               //guardo el año
        mayorcolor=color;          guardo el color
        menoraño=año;
        menormarca=marca;          
    }
    else
    {
        if(año>mayoraño)
        {
            mayor=año;
            mayorcolor=color;
        }
        if(año>menoraño)
        {
            menoraño=año;                   //agregar las variables necesarias de lo que se busca.(variable auxiliar) 
            menorcolor=color;
        }
    }



*/