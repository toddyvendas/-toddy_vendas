function abrirTermos() {
    document.getElementById("modalTermos").style.display = "flex";
}

function fecharTermos() {
    document.getElementById("modalTermos").style.display = "none";
}

window.onclick = function (event) {
    const modal = document.getElementById("modalTermos");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}