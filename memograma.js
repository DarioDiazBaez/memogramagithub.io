let cartas = new Array( 
    {nombre: '😇', seleccion: false}, {nombre: '😎', seleccion: false}, 
    {nombre: '😷', seleccion: false}, {nombre: '🎅', seleccion: false}, 
    {nombre: '😈', seleccion: false}, {nombre: '💩', seleccion: false}, 
    {nombre: '⏰', seleccion: false}, {nombre: '👀', seleccion: false}, 
    {nombre: '😇', seleccion: false}, {nombre: '😎', seleccion: false}, 
    {nombre: '😷', seleccion: false}, {nombre: '🎅', seleccion: false}, 
    {nombre: '😈', seleccion: false}, {nombre: '💩', seleccion: false}, 
    {nombre: '⏰', seleccion: false}, {nombre: '👀', seleccion: false} );
  
  let game = true;        
  let jugada1 = "";
  let jugada2 = "";
  var identificadorJ1 = "";
  var identificadorJ2 = "";
  
  function iniciarJuego () {
    cartas.sort(function() {return Math.random() - 0.5});
    for ( let i = 0 ; i < 16 ; i++ ) {
      let carta = cartas[i].nombre;
      let dato = document.getElementById( i.toString() );
      dato.dataset.valor = carta;
      ContenidoCambio(i, '?');
    }
  };
  
  function girarCarta () {

    if(game==true){
      iniciarJuego();
      game=false;}

    let evento = window.event;
  
    jugada2 = evento.target.dataset.valor;
    identificadorJ2 = evento.target.id;
  
  
   if ( jugada1 !== "" ) {
  
      if ( jugada1 === jugada2 && identificadorJ1 !== identificadorJ2 && cartas[parseInt(identificadorJ2)].seleccion != true && cartas[parseInt(identificadorJ1)].seleccion != true) {
        
        cartas[parseInt(identificadorJ1)].seleccion = true;
        cartas[parseInt(identificadorJ2)].seleccion = true;
  
        ContenidoCambio(identificadorJ2, jugada2);
        vaciar();
        comprobar();
      }else if(identificadorJ1 !== identificadorJ2){
        let self = this;
        setTimeout(function(){
          ContenidoCambio(self.identificadorJ1, "?")
          ContenidoCambio(self.identificadorJ2, "?")
          vaciar()
        },200); 
  
        ContenidoCambio(identificadorJ2, jugada2);
      }
    } else if(jugada2 !== "valor") {
  
      ContenidoCambio(identificadorJ2, jugada2);
  
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
  
  function ContenidoCambio (posicion, contenido) {
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
      game = true;
      for( let i = 0 ; i < 16 ; i++ ){
        cartas[i].seleccion = false
        ContenidoCambio(i,"?")}
      alert("You WIN")
    }
  }