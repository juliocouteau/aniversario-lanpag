const dataDoEvento = new Date("Feb 24, 2026 19:00:00").getTime();

const contador = setInterval(function() {
    const agora = new Date().getTime();
    const distancia = dataDoEvento - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (distancia < 0) {
        clearInterval(contador);
        document.getElementById("contador").innerHTML = "A festa começou!";
    }
}, 1000);