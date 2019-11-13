//Comentario de linea

/*  Comentario
    de 
    bloque 
*/

/**
 * Comentario de bloque para documentar
 

 console.trace('Esto es una traza de log');
 console.info('para informar de cosas');
 var a = 2;
 console.debug('la variable a = ' + a);
 console.warn('houston tenemos un problema');
 console.error('Error en la conoxion al servidor rest');*/

function buscarVoluntario() {
    
    console.trace('click');

    var alumnos = [
        'Mikel', 
        'Joseba', 
        'Raul', 
        'Erlantz', 
        'Cristian', 
        'Ana', 
        'Alejandro', 
        'Maria', 
        'Juancarlos', 
        'Kiryl', 
        'Inigo', 
        'Endika', 
        'Iker', 
        'Aitor'
    ]
    
    for (var i = 0; i < 14; i++){
        var nombreEl2 = document.getElementById(alumnos[i]);
        nombreEl2.className = "";
    }

    var rnd = Math.floor(Math.random() * 13);
    console.log('Random: ' + rnd);
    var nombreEl = document.getElementById(alumnos[rnd]);
    nombreEl.className = "glowbox";
}
