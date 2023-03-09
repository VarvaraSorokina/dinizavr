const riba = document.getElementById("riba");
const vodorosli = document.getElementById("vodorosli");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (riba.classList != "jump") {
        riba.classList.add("jump")
    }
    setTimeout ( function() {
        riba.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval (function() {
    let ribaTop = parseInt(window.getComputedStyle(riba).getPropertyValue("top"));
    let vodorosliLeft = parseInt(window.getComputedStyle(vodorosli).getPropertyValue("left"));

    if (vodorosliLeft < 50 && vodorosliLeft > 0 && ribaTop >= 140) {
        alert("GAME OVER!!!")
    }
}, 10)