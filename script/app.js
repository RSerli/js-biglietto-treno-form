/*
* --- VARIABILI ---
*/
const testoNome = document.getElementById('inputFirstName')
console.dir(testoNome)
const testoCognome = document.getElementById('inputSurname')
console.dir(testoCognome)
const testoLunghezzaTratta = document.getElementById('testoLunghezzzaTratta')
console.dir(testoLunghezzaTratta)
const selezioneSconto = document.getElementById('selezioneSconto')
console.dir(selezioneSconto)
const bottoneCalcolo = document.getElementById('bottoneCalcolaPrezzo')
console.dir(bottoneCalcolo)
const PreviewPrezzoFinale = document.getElementById('PrezzoFinaleBiglietto')
console.dir(PreviewPrezzoFinale)

const IntestatarioCardBiglietto = document.getElementById('IntestatarioBiglietto-preview')
console.dir(IntestatarioCardBiglietto)
const TipologiaCardBiglietto = document.getElementById('TipologiaBilgietto-preview')
console.dir(TipologiaCardBiglietto)
const PrezzoCardBiglietto = document.getElementById('PrezzoBilgietto-preview')
console.dir(PrezzoCardBiglietto)

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

function reloadCardData(nome, cognome, tipologia, costoBiglietto) {
    IntestatarioCardBiglietto.innerText = `${nome} ${cognome}`
    TipologiaCardBiglietto.innerText = tipologia
    PrezzoCardBiglietto.innerText = `${costoBiglietto} €`
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
    let ValoreBiglietto
    if (SceltaSconto === 'Under18') {
        ValoreBiglietto = CostoBiglietttoScontato_Under18.toFixed(2)
    } else if (SceltaSconto === 'Over65') {
        ValoreBiglietto = CostoBiglietttoScontato_over65.toFixed(2)
    } else {
        ValoreBiglietto = CostoBiglietttoIntero.toFixed(2)
    }
    PreviewPrezzoFinale.value = ValoreBiglietto
    // stampa dati sulla card di preview
    const NomeCard = testoNome.value
    console.log(NomeCard)
    const CognomeCard = testoCognome.value
    console.log(CognomeCard)
    reloadCardData(NomeCard, CognomeCard, SceltaSconto, ValoreBiglietto)
})