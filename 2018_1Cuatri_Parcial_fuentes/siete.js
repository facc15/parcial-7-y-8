function mostrar()
{
    var nota;
    var sexo;
    var contador;
    var acumulador=0;
    var notabaja;
    var sexominimo;
    var contadorvarones=0;

    

    for(contador=0;contador<5;contador++)
    {
        nota=prompt("ingresar nota");
        nota=parseInt(nota);
        while(isNaN(nota) || nota<1 || nota>10)
        {
            nota=prompt("ingrese un numero del 1 al 10");
            nota=parseInt(nota);
        }
    
        acumulador=acumulador+nota;

        sexo=prompt("ingrese sexo");

        while(sexo!="m" && sexo!="f")
        {
         sexo=prompt("error, ingrese f o m");
        }
        if(contador==1)
        {
            notabaja=nota;
            sexominimo=sexo;
        }
        else if(nota<notabaja)
        {
            notabaja=nota;
            sexominimo=sexo;
        }

        if(sexo=="m" && nota>=6)
        {
            contadorvarones++;
        }
    }


    
    alert("el promedio de las notas totales es " + acumulador/5);
    alert("la nota mas baja es " + notabaja + " y su sexo es " + sexominimo);
    alert("la cantidad de varones que su nota haya sido mayor a o igual a 6 es " + contadorvarones);
}
