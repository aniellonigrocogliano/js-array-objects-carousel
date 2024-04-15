## Consegna
Ciao ragazzi,
Esercizio di oggi: Carosello Array di Oggetti :carousel_horse: :cat-roomba-exceptionally-fast:
nome repo: js-array-objects-carousel
Consegna:
Dato un array di oggetti letterali con:
 - url dell'immagine
 - titolo
 - descrizione 
Creare un carosello come nella foto allegata.
Milestone 1:
Nel markup allegato rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva con i relativi titolo e testo diventerà visibile.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
Buon lavoro e buon divertimento! :slightly_smiling_face: :muscle: :paperella:

## Svolgimento 
- [x] Creo funzione che tramite ciclo for popola html con le immagini salvate nell'arrray di oggetti
- [x] Creo funzione che tramite ciclo for popola html con le mignature delle immagini salvate nell'arrray di oggetti
- [x] Creo funzione che al click dell'utente scorre alla foto successiva
- [x] Creo funzione che al click dell'utente scorre alla foto precedente
- [x] Imposto timer di 3 secondi che attiva la funzione che scorre alla foto successiva
- [x] Collego il time al bottone attiva, interrompi scorrimento foto
- [x] Salvo le funzioni di successivo e precedente in una variabile
- [x] Collego il bottone inverti e al click cambia la funzione salvata nella variabile in questo modo al click cambia verso di scorrimento