document.addEventListener("keydown", (e) => {
    console.log(e.type);
    console.log(e.code);
    console.log(e);
    if (e.code == "Enter") {
        window.location.href = 'deportista.html'
    }
});
