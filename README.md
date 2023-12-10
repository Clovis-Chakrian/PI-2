# RE-Duca

Esse repositório possui o código do projeto RE-Duca, projeto referente a atividade final da disciplina de projeto integrador.

## O que é o RE-Duca

O RE-Duca é uma leitura dos dados de infraestrutura sobre as escolas ativas do Recife. A fonte para esses dados é o censo escolar de 2022 disponível no [portal de dados abertos do GOV BR](https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-escolar)

Através dessa leitura dos dados conseguimos realizar algumas análises sobre a infraestrutura de algumas escolas. No site é possível ver 3 principais dos que foram trabalhados: Tipos de abastecimento de água recebidos pela escola, energia e com relação a dependência administrativa da escola.

## Como rodar o projeto?

Para rodar o projeto, você pode ou acessar o [link](https://projetao-ashy.vercel.app/) e ver ele funcionando, ou baixar o código desse repositório e rodar através da extensão live server no vscode ou usando node e express para conseguir rodar ele em um servidor local.

## Informações importantes

É possível que os gráficos demorem um pouco para aparecerem, isso se dá por duas razões principais, o servidor que o back end está e a instância do banco de dados no elephant sql. Como esse projeto tem seus dados em uma instância não dedicada no elephant sql e o back está também em uma máquina compartilhada no onrender, algumas solicitações, principalmente as primeiras, demoram mais. Caso demore muito, recomendo recarregar a página, talvez ocorra mais de uma vez considerando testes na minha máquina.

## Tecnologias usadas

Passou pela mente da equipe o uso de algum framework como o NextJs ou o VueJs, mas percebemos que para a demanda real, não faria tanto sentido utilizar um framework se quase não seria utilizada das suas vantagens, como a possibilidade de fazer SPA's ou até mesmo funcionalidades como atualização de dados em tempo real na interface de forma reativa. Então decidimos utilizar o simples que melhor caberia ao projeto: HTML5, CSS3 e Js.