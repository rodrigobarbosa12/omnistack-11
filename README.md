**DIA 1**

# Apresentação - ok

# Configurar ambiente de desenvolvimento - ok

# Entender sobre Backend e Frontend - ok
- Restfull são padrões de api

- 'yarn init -y' Cria o package.json

# Criar projeto Node.js - ok
- express é um micro framework

# Entender sobre React & SPA - ok
- O modo tradicional traz todo o html do servedor para exibir em tela
- SPA Single-Page Applications (Aplicaçõse de uma unica pagina)

# Criar projeto com ReactJS - ok
- npx executa um pacote externo sem a necessidade de instalar ele de forma global
- npx create-react-app nome-da-pasta
- No meu caso com o comando 'npx' não funcionou tive que usar 'yarn create react-app frontend'

# Entender sobre React native & Expo - ok

**DIA 2**

# Node e express - ok
- Rota é o caminha completo
- Recursos são os caminhos "/users"

    - TIPOS DE PARÂMETROS -
* Request params = parametros na string
* Route params = parametros usado para identificar recursos na rota "/users/:id"
* Request body =


# Configurando nodemon - ok

# Utilizando insomnia - ok

# Diferenças entre bancos de dados - ok

* SQL é o formato que utilizamos para nos comunicar com o banco
* Banco de dados SQLite é em um arquivo

- KNEX.JS - é um query builder
    * npx knex init - inicializa o knex

# Configurando banco de dados - ok

* npx knex migrate:make nome_da_migration
* npx knex migrate:latest - Cria a migration
* npx knex migrate:rollback - apaga a tabela criada
* npx knex migrate:status - lista as migrations que ja foram executadas
# Pensando ans entidades e funcionalidades - ok

# Construção do backend - ok

# Adicionando modulo CORS - ok

# Enviando back-and ao github - ok

**DIA 03**

# Limpando estrutura - ok

# Conceitos do React - ok

# Página de login - ok

# Configurando rotas - ok

- yarn add react-router-dom - Responsavel por lidar com as rotas
- Switch garante que apenas uma rota seja executada no momento
- Link Comportamento de SPA (Não atualiza toda a pagina)

# Cadastro de ONGs - ok

# Listagem de casos - ok

# Cadastro de um novo caso - ok

# Conectando a aplicação à api - ok

- Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value) -> Formata um valor em reais

# Enviar projeto ao github - ok

**DIA 04**

# Instalando expo - ok
- "yarn global add expo-cli" instala o expo de forma global na minha maquina
- "expo init nome_do_projeto" inicia um projeto com expo

# Criando projeto React Native - ok

# Executando projeto - ok
 - No celular
 - Emuladores
 - Expo Snack

# Diferença para o ReactJS - ok
- Elementos HTML:

- Semântica
- Estilização:
    FlexBox:
    * Todo elemento no react native ja tem "display: flex" por padrão

    propriedades:

    herança de estilos:

    Estilização própria:
    * Não existe herançã de estilo no react native, cada elemente precisa ter sua prorpia estilização

# Estruturas de pastas - ok

# Ícone e Splash Screen - ok

# Configurando navegação - ok
- https://reactnavigation.org/docs/getting-started/ Documentação do react navigation para instalar
- https://reactnavigation.org/docs/hello-react-navigation Tipos de navegação

- Por padrão p flex-direction no mobile é column, diferente da web que é row

# Página de casos - ok

- TouchableOpacity torna qualquer cosia clicavel e quando clica ele diminue a opacidade do qeu foi clicado

# Detalhe do caso - ok

# Abrindo whatsapp & E-mail - ok
- expo intall expo-mail-composer Para abrir escrita de email na aplicação mobile
- Deep Linking Abre outros aplicativos do celular
- yarn add intl Para usar o Intl no android
- o intl precisa estar disponivel em todos os arquivos, por isso é bom importar a biblioteca em App.js:
    * import 'intl';
    * import 'intl/locale-data/jsonp/pt-BR';

- useRoute Serve para pegar informações especificas da pagina atual da aplicação

# Conexão com API - ok

# Enviando projeto ao Github - ok

**DIA 05**

# Adicionando validação - ok
- "yarn add celebrate" Para fazer validações
- As validações devem estar nas rotas onde recebem dados do cliente

# Adicionando testes - ok
 * Por que fazer teste ?
 * TDD (Test-Driven-Development):
    - "yarn add jest" e "npx jest --init" Para trabalhar com testes
 * Configurando Jest
 * Tipos de testes:
    - Testes unitário
    - Testes de integração
 * Configurando banco de dados
 * Imstalando supertest
 * Testando rota de autenticação

 - "yarn add cross-env" - Quando estivermos executando o nosso codigo com o script de teste,
    teremos uma variavel ambiente disponivel, podemos utilizala para verificar se é teste ou não

- Supertest É um "mock" de requisição para testes
- É necessario criar as migrations para os testes funcionar

# Deploy -ok
 * Alternativas
 * Qual escolher ?

# Estudos daqui pra frente - ok
 ** Padrões de código: Eslint, Prettier
 ** Autenticação JWT
 ** Styled Components

# Dicas para aproveitar melhor - ok
