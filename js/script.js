var cognomeUtente = prompt('Inserire qua il proprio cognome');
var cognomi = [ 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
cognomi.push(cognomeUtente);
cognomi.sort();

document.getElementById('lista-cognomi').innerHTML += 'La lista dei cognomi è:'+ '  ' + cognomi

var posizione = cognomi.indexOf(cognomeUtente) + 1 ;

document.getElementById('posizione').innerHTML += 'La  tua posizione nella lista dei cognomi è la:' + '  ' + posizione 