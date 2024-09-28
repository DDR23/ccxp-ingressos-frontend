const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

lancamento = '31 dec 2024'

function countDown() {
  const dataLancamento = new Date(lancamento)
  console.log(lancamento)
  const hoje = new Date()

  const segTotal = (dataLancamento - hoje) / 1000;
  const finalDias = Math.floor(segTotal / 60 / 60 / 24);
  const finalHoras = Math.floor(segTotal / 60 / 60 % 24);
  const finalMinutos = Math.floor(segTotal / 60) % 60;
  const finalSegundos = Math.floor(segTotal) % 60;

  const diaFormatado = formatoTempo(finalDias)
  const horaFormatado = formatoTempo(finalHoras)
  const minutoFormatado = formatoTempo(finalMinutos)
  const segundoFormatado = formatoTempo(finalSegundos)

  dia.innerHTML = `${diaFormatado}D`
  hora.innerHTML = `${horaFormatado}H`
  minuto.innerHTML = `${minutoFormatado}M`
  segundo.innerHTML = `${segundoFormatado}S`
}

function formatoTempo(tempo) {
  return tempo < 10 ? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000)
