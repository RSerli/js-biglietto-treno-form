/*
* --- VARIABILI ---
*/
const testoLunghezzaTratta = document.getElementById('testoLunghezzzaTratta')
console.dir(testoLunghezzaTratta)
const selezioneSconto = document.getElementById('selezioneSconto')
console.dir(selezioneSconto)
const bottoneCalcolo = document.getElementById('bottoneCalcolaPrezzo')
console.dir(bottoneCalcolo)
const PreviewPrezzoFinale = document.getElementById('PrezzoFinaleBiglietto')
console.dir(PreviewPrezzoFinale)

const COSTO_KILOMETRAGGIO = 0.21 //numero Float
const SCONTO_UNDER18 = 20 //numero Integer
const SCONTO_OVER65 = 40 //numero Integer

/*
* --- FUNZIONI UTILI---
*/
function CalcoloBigliettoConSconto(PrezzoIntero, PercentualeSconto) {
    const ScontoTotale = (PrezzoIntero * PercentualeSconto) / 100 //numero Float
    const PrezzoFinale = PrezzoIntero - ScontoTotale //numero Float
    //return numero Float
    return PrezzoFinale
}

/*
* --- FUNZIONI PRICIPALI ---
*/

// click sul bottone di calcolo
bottoneCalcolo.addEventListener('click', (event) => {
    event.preventDefault()
    console.log("Calcolo costo biglietto")
    // ottenimento del valore della tratta inserita
    const ValoreLunghezzaTratta = parseFloat(testoLunghezzaTratta.value)
    console.log(ValoreLunghezzaTratta)
    // - Controllo se è stato inserito un valore corretto
    if (!ValoreLunghezzaTratta) { // SE è errato esce dalla funzione
        console.error("Dato errato tratta")
        return
    }
    // ottenimento del scelta dello sconto da parte dell'utente
    const SceltaSconto = selezioneSconto.value
    console.log(SceltaSconto) //numero Float
    // CALCOLO DEL BIGLIETTO
    // - Calcolo biglietto intero
    const CostoBiglietttoIntero = ValoreLunghezzaTratta * COSTO_KILOMETRAGGIO //numero Float
    console.log(CostoBiglietttoIntero)
    //- Calcolo biglietto sconto under 18
    const CostoBiglietttoScontato_Under18 = CalcoloBigliettoConSconto(CostoBiglietttoIntero, SCONTO_UNDER18)
    console.log(CostoBiglietttoScontato_Under18)
    //- Calcolo biglietto sconto over 65
    const CostoBiglietttoScontato_over65 = CalcoloBigliettoConSconto(CostoBiglietttoIntero, SCONTO_OVER65)
    console.log(CostoBiglietttoScontato_over65)
    // VISUALIZZAZIONE DEL COSTO FINALE DEL BIGLIETTO
    if (SceltaSconto === 'Under18') {
        PreviewPrezzoFinale.value = CostoBiglietttoScontato_Under18.toFixed(2)
    } else if (SceltaSconto === 'Over65') {
        PreviewPrezzoFinale.value = CostoBiglietttoScontato_over65.toFixed(2)
    } else {
        PreviewPrezzoFinale.value = CostoBiglietttoIntero.toFixed(2)
    }
})