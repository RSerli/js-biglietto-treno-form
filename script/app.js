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

// click sul bottone di calcolo
bottoneCalcolo.addEventListener('click', () => {
    console.log("Calcolo costo biglietto")
    // ottenimento del valore della tratta inserita
    const ValoreLunghezzaTratta = parseFloat(testoLunghezzaTratta.value)
    console.log(ValoreLunghezzaTratta)
    // - Controllo se è stato inserito un valore corretto
    if (!ValoreLunghezzaTratta) { // SE è errato esce dalla funzione
        console.error("Dato errato tratta")
        return
    }

})