const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

const operadores = ["+", "-", "*", "/"];

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (btn.id === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }
        else if (btn.id === "ac") {
            display.value = "";
        }
        else if (btn.id === "dc") {
            display.value = display.value.slice(0, -1);
        }
        else {
            const ultimoCaracter = display.value[display.value.length - 1];
            const esOperador = operadores.includes(btn.id);
            const ultimoEsOperador = operadores.includes(ultimoCaracter);

            if (esOperador && ultimoEsOperador) {
                console.log("❌ No puedes poner dos operadores seguidos");
                return;
            }

            display.value += btn.id;
        }
    });
});