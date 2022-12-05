var bras = 1
var caouete = 0
var brasCost = 100
var caoueteSec = 0
var chineseWorker = 0
var chineseWorkerCost = 25


function init_clicker() {
    document.getElementById("clicker").addEventListener("click", plusCaouete)
    document.getElementById("buttonUp").addEventListener("click", plusCaoueteR)
    document.getElementById("buttonUpArm").addEventListener("click", plusBras)
    setInterval(intervalleCaouete, 1000)
    actu()
}

function plusCaouete() {
    caouete += bras
    actu()
}

function plusCaoueteR() {
    if (caouete >= chineseWorkerCost){
        caoueteSec += 1
        caouete -= chineseWorkerCost
        chineseWorkerCost = Math.round(chineseWorkerCost * 1.3)
        chineseWorker += 1
        actu()
    }
}

function plusBras() {
    if (caouete >= brasCost){
        bras += 1
        caouete -= brasCost
        brasCost *= 10
        actu()
    }
}

function intervalleCaouete() {
    caouete += caoueteSec
    actu()
}

function actu() {
	document.getElementById("caouete").innerText = caouete
    document.getElementById("buttonUp").innerText = "Acheter un chinois | " + chineseWorkerCost + " caouètes | " + chineseWorker + " travailleurs noich"
    document.getElementById("buttonUpArm").innerText = "Se faire implanter un bras | " + brasCost + " caouètes | " + bras + " bras possédé(s)"
}