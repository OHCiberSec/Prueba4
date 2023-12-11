const NumerosSort = [13, 23, 25, 2, 9, 33];
var totalJugadas = 0;
var jugadoresGanan = 0;
var jugadoresSinPremio = 0;

function Jugada() {
    var nombre = document.getElementById('nombre').value;
    var n1 = +document.getElementById('num1').value;
    var n2 = +document.getElementById('num2').value;
    var n3 = +document.getElementById('num3').value;
    var n4 = +document.getElementById('num4').value;
    var n5 = +document.getElementById('num5').value;
    var n6 = +document.getElementById('num6').value;

    totalJugadas++;
    var jugadaUsuario = [n1, n2, n3, n4, n5, n6];
    var aciertos = contar(jugadaUsuario, NumerosSort);

    if (aciertos === 6) {
        jugadoresGanan++;
    } else {
        jugadoresSinPremio++;
    }

    alert('Jugada agregada');
    document.getElementById('formulario').reset();
    mostrarResultados(aciertos);
}

function terminar() {
    mostrarResultados(0);
}

function contar(numerosJugada, NumerosSort) {
    var aciertos = 0;

    for (let i = 0; i < numerosJugada.length; i++) {
        for (var j = 0; j < NumerosSort.length; j++) {
            if (numerosJugada[i] === NumerosSort[j]) {
                aciertos++;
                break;
            }
        }
    }

    return aciertos;
}

function mostrarResultados(aciertos) {
    var resultadoFinal = document.getElementById('Resultados');
    resultadoFinal.textContent = 'Resultados de la ronda:\n' +
        'Aciertos: ' + aciertos + '\n' +
        'Ganan: ' + jugadoresGanan + '\n' +
        'Sin Premio: ' + jugadoresSinPremio;
}
