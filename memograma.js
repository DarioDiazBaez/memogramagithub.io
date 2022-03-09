let cartas = new Array( 
    {nombre: '🤢', seleccion: false}, {nombre: '🤕', seleccion: false}, 
    {nombre: '😴', seleccion: false}, {nombre: '😷', seleccion: false}, 
    {nombre: '🥶', seleccion: false}, {nombre: '💩', seleccion: false}, 
    {nombre: '👽', seleccion: false}, {nombre: '👀', seleccion: false}, 
    {nombre: '🤢', seleccion: false}, {nombre: '🤕', seleccion: false}, 
    {nombre: '😴', seleccion: false}, {nombre: '😷', seleccion: false}, 
    {nombre: '🥶', seleccion: false}, {nombre: '💩', seleccion: false}, 
    {nombre: '👽', seleccion: false}, {nombre: '👀', seleccion: false} );
          
  let intentos = 0;
  let jugada1 = "";
  let jugada2 = "";
  var identificadorJ1 = "";
  var identificadorJ2 = "";
  
  function iniciarJuego () {
    var dato = document.getElementById("juego");
    cartas.sort(function() {return Math.random() - 0.5});
    for ( let i = 0 ; i < 16 ; i++ ) {
      let carta = cartas[i].nombre;
      let dato = document.getElementById( i.toString() );
      dato.dataset.valor = carta;
    }
  };
  
  function girarCarta () {
    let evento = window.event;
  
    jugada2 = evento.target.dataset.valor;
    identificadorJ2 = evento.target.id;
  
  
    if ( jugada1 !== "" ) {
  
      if ( jugada1 === jugada2 && identificadorJ1 !== identificadorJ2 && cartas[parseInt(identificadorJ2)].seleccion != true && cartas[parseInt(identificadorJ1)].seleccion != true) {
        
        cartas[parseInt(identificadorJ1)].seleccion = true;
        cartas[parseInt(identificadorJ2)].seleccion = true;
  
        colorCambio(identificadorJ2, "blue", jugada2);
        vaciar();
        comprobar();
      }else if(identificadorJ1 !== identificadorJ2){
        let self = this;
        setTimeout(function(){
          colorCambio(self.identificadorJ1, "black", "?")
          colorCambio(self.identificadorJ2, "black", "?")
          vaciar()
        },200); 
  
        colorCambio(identificadorJ2, "blue", jugada2);
      }
    } else if(jugada2 !== "valor") {
  
      colorCambio(identificadorJ2, "blue", jugada2);
  
      jugada1 = jugada2;
      identificadorJ1 = identificadorJ2;
    }
  };
  
  function vaciar ()  {
    jugada1 = ""; 
    jugada2 = ""; 
  
    identificadorJ1 = "";
    identificadorJ2 = "";
  }
  
  function colorCambio (posicion, color, contenido) {
    document.getElementById(posicion.toString()).style.backgroundColor = color;
    document.getElementById(posicion.toString()).innerHTML = contenido;
  }   
  
  function comprobar () {
    let aciertos = 0;
    for( let i = 0 ; i < 16 ; i++ ){
      if ( cartas[i].seleccion == true ) {
        aciertos ++;
      }
  
    }
  
    if(aciertos == 16){
      setTimeout(() => {
      alert("You WIN")
      resetearJuego();
      }, 1000);
    }
  }
  
  function resetearJuego () {
              cartas.sort(function() { return Math.random() - 0.5});
              for ( let i = 0; i < 16 ; i++ ) {
                  let carta = cartas[i].nombre;
                  let dato = document.getElementById( i.toString() );
                  dato.dataset.valor = carta;
                  colorCambio(i, 'black', '?');
              }
          };