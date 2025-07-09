


function realizarBusqueda() {
    // const query = .value.trim().toLowerCase();
    const texto = document.getElementById('buscar').value.toLowerCase();
    const parrafos = document.querySelectorAll('body *');
    parrafos.forEach(el => {
        const visible = el.textContent.toLowerCase().includes(texto);
        el.style.display = visible ? 'block' : 'none';
    });

    /* const elementos = document.querySelectorAll("h1, h2, h3, h4, p");

    // Limpiar resultados anteriores
    elementos.forEach(el => {
        el.innerHTML = el.innerHTML.replace(/<mark>(.*?)<\/mark>/g, "$1");
    });

    if (query === "") return;

    let encontrado = false;

    elementos.forEach(el => {
        const texto = el.textContent.toLowerCase();
        if (texto.includes(query)) {
            const regex = new RegExp(`(${query})`, "gi");
            el.innerHTML = el.innerHTML.replace(regex, "<mark>$1</mark>");
            if (!encontrado) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                encontrado = true;
            }
        }
    });

    if (!encontrado) {
        alert("No se encontró ningún resultado.");
    } */
}

document.addEventListener("DOMContentLoaded", function () {
    const btnBuscar = document.getElementById("searchBtn");
    const inputBuscar = document.getElementById("buscar");

    if (btnBuscar) {
        btnBuscar.addEventListener("click", realizarBusqueda);
    }

    if (inputBuscar) {
        inputBuscar.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                realizarBusqueda();
            }
        });
    }
});



/* // Botón con ícono
document.getElementById("searchBtn").addEventListener("click", realizarBusqueda);

// Búsqueda con tecla Enter
document.getElementById("searchInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        realizarBusqueda();
    }
}); */