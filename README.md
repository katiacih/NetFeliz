# Overview

Projeto clone do netflix

Projeto criado com [Create React Native App](https://github.com/react-community/create-react-native-app)

## Demonstração

![gif](https://github.com/katiacih/NetFeliz/blob/main/demo.gif)

## Funcionalidades

[x] - Lista de filmes  
[x] - Detalhes de filmes  
[] - Reprodução de video  
[] - Uso de gerenciamento de estados (redux, recoil)   
[] - Testes unitario   
[] - Testes de integração   

## Stack utilizada

**React Native**

O [React Native](https://reactnative.dev/) traz a estrutura de IU declarativa do React para iOS e Android. Com o React Native, você usa controles de interface do usuário nativos e tem acesso total à plataforma nativa.

O React Native é desenvolvido e suportado por muitas empresas e colaboradores principais individuais. Saiba mais em nossa visão geral do ecossistema.

**Expo**

[Expo](https://expo.dev/) é uma plataforma de código aberto para criar aplicativos nativos universais que rodam no Android, iOS e na web. Ele inclui um tempo de execução universal e bibliotecas que permitem criar aplicativos nativos escrevendo React e JavaScript.

## Desenvolvedor

### Scripts

### Instalar dependencias

Your project may not work correctly until you install the correct versions of the packages.
Fix with:

`npx expo install --fix`

Instale as seguintes bibliotecas para rodar a aplicação mobile com Expo:
`npm install`

ou
` yarn i`

### Para executar

Para executar em modo de desenvolvimento.

Abra o aplicativo [Expo app](https://expo.io) em seu telefone e utilizando o terminal

Algumas vezes pode ser necessário resetar ou limpar o cache do pacote React Native e para isso passe o parametro `--reset-cache` ao script para iniciar
:
Preferecialmente use
expo start

```
npm start --reset-cache
# or
yarn start --reset-cache
```

##### Usando Android Studio's `adb`

Ao executar no terminal
Abra o Genymotion e navegue até `Settings -> ADB`. Selecione “Use custom Android SDK tools” e atualize o com seu [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

#### Executando no IOS

`npm run ios`

Ao executar `npm start`, pode escolher executar em um IOS.

#### Executando no android

`npm run android`

Necessário estar com o dispositivo ou emulador conectado.
Reqyer uma instalação do Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).
Recomenta-se tambem a instalação do Genymotion no seu emulador android.

## Autores

- [@katiacih](https://www.github.com/katiaich)
