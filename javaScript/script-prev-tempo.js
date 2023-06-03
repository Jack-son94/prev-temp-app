const chave = "cebcd482eda57fa9a6714c1c2ba91885"; //minha chave: 664fe23e27abb19385349ef4a13448d3

function mostrarDadosNaTela(dados) {
    console.log(dados);
    document.querySelector('.cidade').innerHTML = "Tempo em: " + `<u>${dados.name}</u>`; 
    document.querySelector('.temperatura').innerHTML = `Temp: ${Math.floor(dados.main.temp)}° C`;
    document.getElementById('maxima').innerHTML = `Max: ${Math.floor(dados.main.temp_max)}° C`;
    document.getElementById('minima').innerHTML = `Min: ${Math.floor(dados.main.temp_min)}° C`;
    document.querySelector('.estado-do-tempo').innerHTML = dados.weather[0].description;
    document.querySelector('.icone-nuvem').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
    document.querySelector('.info-umidade').innerHTML = "Umidade: " + dados.main.humidity + "%";
}

async function dadosDoServidor(cidadePesquisada) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidadePesquisada}&appid=${chave}&lang=pt_br&units=metric`).then(resposta => resposta.json());
    mostrarDadosNaTela(dados)
}
function pesquisaDoUsuario() {
    const cidadePesquisada = document.querySelector('.busca-cidade').value;
    dadosDoServidor(cidadePesquisada)
}