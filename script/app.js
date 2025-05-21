/*
* --- VARIABILI ---
*/
const testoLunghezzaTratta = document.getElementById('testoLunghezzzaTratta')
console.dir(testoLunghezzaTratta)
const selezioneSconto = document.getElementById('selezioneSconto')
console.dir(selezioneSconto)
const bottoneCalcolo = document.getElementById('bottoneCalcolaPrezzo')
console.dir(bottoneCalcolo)
const RigaPrezzoFinale = document.getElementById('PrezzoFinaleBiglietto')
console.dir(RigaPrezzoFinale)

const COSTO_KILOMETRAGGIO = 0.21
const SCONTO_UNDER18 = 20
const SCONTO_OVER65 = 40

/*
* --- FUNZIONI UTILI---
*/


/*
* --- FUNZIONI PRICIPALI ---
*/

bottoneCalcolo.addEventListener('click', () => {
    console.log("Calcolo costo biglietto")
})