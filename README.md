# Weather

Esta aplicação coleta dados em tempo real do clima da localização escolhida pela usuário e fornece os dados do dia atual e para os próximos dias.

A aplicação trabalha com a API de Geoplaces do Google e também a API de clima tempo do https://hgbrasil.com/

### Configurações

- No arquivo .env localizado na raiz do projeto altere as variáveis ambientes com as informações das chaves de acordo cada API:
- `GOOGLE_KEY`(Chave do Geoplaces do Google)
- `HGBRASIL_KEY`(Chave do Clima tempo HGBrasil)

### Executando o App

Na raiz deste projeto, rode:

- `cd ./Weather-app`
- ` yarn` ou `npm install`
- `yarn android` ou `npm run android`
