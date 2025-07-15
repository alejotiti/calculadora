let pantalla = document.querySelector("#pantalla");
let botones = document.querySelectorAll(".btn");

let ecuacion = ""

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        if (boton.id === "limpiar") {
            pantalla.value = "";
        } else if (boton.id === "igual") {
            try {
                pantalla.value = eval(ecuacion);
                ecuacion = pantalla.value;
            } catch {
                pantalla.value = "Error";
                ecuacion = "";
            }
        } else {
            ecuacion += boton.textContent;
            pantalla.value += boton.textContent;
        }
    });
});