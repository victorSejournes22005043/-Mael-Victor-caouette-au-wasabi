var bras = 1
var caouete = 0
var brasCost = 50
var caoueteSec = 0
var chineseWorker = 0
var chineseWorkerCost = 85
var riz = 0
var rizCost = 250
var nbClick = 0

const audio = new Audio("audio/obasima.mp3")

function init_clicker() {
    document.getElementById("clicker").addEventListener("click", plusCaouete)
    document.getElementById("buttonUp").addEventListener("click", plusCaoueteR)
    document.getElementById("buttonUpArm").addEventListener("click", plusBras)
    document.getElementById("buttonUpRice").addEventListener("click", plusRiz)
    setInterval(intervalleCaouete, 1000)
    actu()
}

function plusCaouete() {
    caouete += bras
    nbClick += 1
    actu()
}

function plusCaoueteR() {
    if (caouete >= chineseWorkerCost){
        caoueteSec += 1
        caouete -= chineseWorkerCost
        chineseWorkerCost = Math.round(chineseWorkerCost * 1.1)
        chineseWorker += 1
        actu()
    }
}

function plusBras() {
    if (caouete >= brasCost){
        bras *= 2
        caouete -= brasCost
        brasCost *= 5
        actu()
    }
}

function plusRiz() {
    if (chineseWorker >= 1 & caouete >= rizCost){
        caoueteSec += 5
        caouete -= rizCost
        rizCost = Math.round(rizCost * 1.2)
        riz += 5
        actu()
    }
}

function intervalleCaouete() {
    caouete += caoueteSec
    actu()
}

function actu() {
	document.getElementById("caouete").innerText = "Caouètes : " + caouete
    document.getElementById("buttonUp").innerText = "Acheter un chinois | " + chineseWorkerCost + " caouètes | " + chineseWorker + " caouètes/s"
    document.getElementById("buttonUpArm").innerText = "Se faire implanter un bras | " + brasCost + " caouètes | " + bras + " bras possédé(s)"
    document.getElementById("buttonUpRice").innerText = "Nourrir les chinois | " + rizCost + " caouètes | " + riz + " kg de riz (caouètes/s)"
    if (nbClick >= 1000){
        audio.play()
    }
}