var achtergrondKleurVar;
var titelKleurVar;
function achtergrondKleur() {
    achtergrondKleurVar = document.getElementById("input").value;
}
function titelKleur() {
    titelKleurVar = document.getElementById("input").value;
}
function toepassing() {
    document.getElementById("achtergrond").style.backgroundColor = achtergrondKleurVar;
    document.getElementById("titel").style.color = titelKleurVar;
}