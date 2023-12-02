async function getData() {
  const urlBase = 'https://pi-back-gxr4.onrender.com';

  try {
    const escolasResponse = await fetch(`${urlBase}/tipo-escola`);
    const abastEnergiaResponse = await fetch(`${urlBase}/abastecimento-energia`);
    const abastAguaResponse = await fetch(`${urlBase}/abastecimento-agua`);

    const escolas = await escolasResponse.json();
    const abastAgua = await abastAguaResponse.json();
    const abastEnergia = await abastEnergiaResponse.json();

    const escolasInfo = {
      federal: 0,
      estadual: 0,
      municipal: 0,
      privada: 0
    };

    const abastAguaInfo = {
      potavel: 0,
      publica: 0,
      artesiana: 0,
      cacimba: 0,
      rio: 0,
      inexistente: 0
    };

    const abastEnergiaInfo = {
      publica: 0,
      geradorfossil: 0,
      renovavel: 0,
      inexistente: 0
    };

    calculaQntdEscola(escolas, escolasInfo);
    calculaQntdAbastAgua(abastAgua, abastAguaInfo);
    calculaQntdAbastEnergia(abastEnergia, abastEnergiaInfo);
    console.log('Dados do banco de dados:', escolasInfo, abastAguaInfo, abastEnergiaInfo);
    geraGraficoEscola(escolasInfo);
    geraGraficoAgua(abastAguaInfo);
    geraGraficoEnergia(abastEnergiaInfo);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados:', error);
  }
}

function calculaQntdEscola(escolas, escolasInfo) {
  escolas.map(escola => {
    switch (escola.dependenciaAdministrativa) {
      case "Federal":
        escolasInfo.federal++;
        break;

      case "Estadual":
        escolasInfo.estadual++;
        break;

      case "Municipal":
        escolasInfo.municipal++;
        break;

      case "Privada":
        escolasInfo.privada++;
        break;

      default:

        break;
    }

  })
}

function calculaQntdAbastAgua(abastAgua, abastAguaInfo) {
  abastAgua.map(abast => {
    switch (abast.idAbastecimentoAgua) {
      case "Agua Potavel":
        abastAguaInfo.potavel++;
        break;

      case "Agua Rede Publica":
        abastAguaInfo.publica++;
        break;

      case "Agua Poco Artesiano":
        abastAguaInfo.artesiana++;
        break;

      case "Agua Cacimba":
        abastAguaInfo.cacimba++;
        break;

      case "Agua Fonte Rio":
        abastAguaInfo.rio++;
        break;

      case "Inexistente":
        abastAguaInfo.inexistente++;
        break;

      default:

        break;
    }

  })
}

function calculaQntdAbastEnergia(abastEnergia, abastEnergiaInfo) {
  abastEnergia.map(abast => {
    switch (abast.idAbastecimentoEnergia) {
      case "Rede Publica":
        abastEnergiaInfo.publica++;
        break;

      case "Gerador Fossil":
        abastEnergiaInfo.geradorfossil++;
        break;

      case "Energia Renovavel":
        abastEnergiaInfo.renovavel++;
        break;

      case "Inexistente":
        abastEnergiaInfo.inexistente++;
        break;

      default:

        break;
    }

  })
}

function geraGraficoEscola(escolasInfo) {
  const canvaGrafico = document.getElementById("graficoBarra");

  new Chart(canvaGrafico, {
    type: 'bar',
    data: {
      labels: ['Federal', 'Estadual', 'Municipal', 'Privada'],
      datasets: [{
        label: 'Escolas estratificadas por dependência administrativa',
        data: [escolasInfo.federal, escolasInfo.estadual, escolasInfo.municipal, escolasInfo.privada],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function geraGraficoAgua(abastAgua) {
  const canvaGrafico = document.getElementById("graficoPizza");

  new Chart(canvaGrafico, {
    type: 'pie',
    data: {
      labels: ['Potavel', 'Rede Pública', 'Poço Artesiano', 'Cacimba', "Rio", "Inexistente"],
      datasets: [{
        label: 'Escolas estratificadas por abastecimento de agua',
        data: [abastAgua.potavel, abastAgua.publica, abastAgua.artesiana, abastAgua.cacimba, abastAgua.rio, abastAgua.inexistente],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function geraGraficoEnergia(abastEnergiaInfo) {
  const canvaGrafico = document.getElementById("graficoDonut");

  new Chart(canvaGrafico, {
    type: 'doughnut',
    data: {
      labels: ['Rede Pública', 'Gerador Fossil', 'Energia Renovavel', "Inexistente"],
      datasets: [{
        label: 'Escolas estratificadas por abastecimento de agua',
        data: [abastEnergiaInfo.publica, abastEnergiaInfo.geradorfossil, abastEnergiaInfo.renovavel, abastEnergiaInfo.inexistente],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}


getData();