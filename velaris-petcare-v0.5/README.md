# Velaris PetCare v0.5

## Sobre o projeto

O **Velaris PetCare** é um protótipo simples desenvolvido para o Projeto Integrador do curso de Análise e Desenvolvimento de Sistemas.

A proposta do projeto é criar uma plataforma comunitária para divulgação de serviços pet locais, ajudando donos de animais a encontrar pet shops, clínicas veterinárias, serviços de banho e tosa, vacinação, hotel pet e outros cuidados para seus pets.

Esta versão, chamada de **v0.5**, representa um esboço inicial do sistema, com foco em simplicidade, clareza da ideia e facilidade de apresentação.

---

## Tema do Projeto Integrador

**Conecta Comunidade: site ou aplicativo para divulgação de serviços e produtos comunitários.**

O projeto Velaris PetCare se encaixa nesse tema por conectar moradores da comunidade a pequenos negócios e prestadores de serviços pet da região.

---

## Objetivo geral

Desenvolver um MVP simples e funcional para centralizar informações sobre serviços pet comunitários, facilitando o acesso da população a estabelecimentos próximos, horários, contatos e categorias de atendimento.

---

## Problema identificado

Muitos pequenos pet shops e prestadores de serviços pet divulgam seus atendimentos de forma desorganizada, principalmente por redes sociais, grupos de mensagens ou indicações informais.

Isso pode dificultar que moradores encontrem rapidamente informações como:

* localização do estabelecimento;
* categoria do serviço;
* horário de atendimento;
* contato;
* avaliações;
* disponibilidade;
* descrição dos serviços oferecidos.

---

## Solução proposta

A solução proposta é uma página simples em React que apresenta serviços pet locais de forma organizada, permitindo ao usuário:

* conhecer a proposta da plataforma;
* visualizar serviços cadastrados;
* buscar serviços por nome, bairro ou categoria;
* ver detalhes de cada serviço;
* sugerir novos estabelecimentos;
* visualizar uma área administrativa conceitual.

---

## Tecnologias utilizadas

* React
* Vite
* JavaScript
* HTML
* CSS puro
* Dados mockados

---

## Características da versão v0.5

Esta versão foi criada para ser simples e fácil de explicar.

Ela não possui:

* backend;
* banco de dados;
* autenticação real;
* rotas com React Router;
* integração com API;
* sistema real de agendamento.

Ela possui apenas uma página com seções organizadas por âncoras.

---

## Funcionalidades implementadas

### 1. Página inicial

A página inicial apresenta:

* nome do projeto;
* slogan;
* explicação resumida;
* objetivo da plataforma;
* chamada para visualizar os serviços.

Slogan:

> Conectando cuidado e confiança para seu pet.

---

### 2. Listagem de serviços

A seção de serviços mostra cards com estabelecimentos pet simulados.

Cada card apresenta:

* nome do estabelecimento;
* categoria;
* bairro;
* horário;
* contato;
* botão para visualizar detalhes.

---

### 3. Busca simples

A seção de busca permite filtrar os serviços usando texto.

A busca funciona por:

* nome;
* bairro;
* categoria.

Essa funcionalidade utiliza `useState` e `.filter()` no React.

---

### 4. Detalhes do serviço

Cada card possui um botão **Ver detalhes**.

Ao clicar, uma área é expandida dentro do próprio card, mostrando:

* descrição;
* endereço;
* contato;
* horário de funcionamento;
* categoria;
* bairro.

O botão alterna entre:

* **Ver detalhes**
* **Ocultar detalhes**

Essa solução foi escolhida para manter o projeto simples, sem criar novas páginas ou modais.

---

### 5. Formulário de sugestão

O sistema possui um formulário simples para sugestão de novo serviço.

Campos do formulário:

* nome do estabelecimento;
* categoria;
* bairro;
* contato;
* descrição.

Ao enviar, o sistema mostra uma mensagem simulada de sucesso.

---

### 6. Área administrativa conceitual

A área administrativa é apenas demonstrativa.

Ela mostra cards com números fictícios, como:

* serviços cadastrados;
* categorias;
* sugestões simuladas;
* agendamentos simulados.

Essa seção representa uma possível área futura de gestão da plataforma.

---

## Estrutura de pastas

```text
velaris-petcare-v0.5/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── services.js
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── ServiceCard.jsx
        ├── SearchSection.jsx
        ├── SuggestForm.jsx
        ├── AdminSection.jsx
        └── Footer.jsx
```

---

## Explicação dos principais arquivos

### `App.jsx`

Arquivo principal do projeto.

Ele organiza todas as seções da página:

* Início;
* Serviços;
* Busca;
* Sobre o Projeto Integrador;
* Sugerir Serviço;
* Admin.

---

### `main.jsx`

Arquivo responsável por renderizar o React na página.

---

### `index.css`

Arquivo de estilos globais.

Contém:

* cores principais;
* reset básico;
* layout;
* responsividade;
* estilos dos cards;
* botões;
* formulários;
* seções.

---

### `services.js`

Arquivo com os dados simulados dos serviços pet.

Contém informações como:

* nome;
* categoria;
* bairro;
* descrição;
* endereço;
* contato;
* horário.

---

### `Header.jsx`

Componente do cabeçalho.

Possui navegação simples por âncoras.

---

### `Hero.jsx`

Componente da seção inicial.

Apresenta o nome do projeto, slogan e explicação principal.

---

### `ServiceCard.jsx`

Componente responsável por exibir cada serviço.

Também possui a função de expandir e ocultar os detalhes do estabelecimento.

---

### `SearchSection.jsx`

Componente da busca simples.

Usa `useState` para controlar o texto digitado e filtrar os serviços.

---

### `SuggestForm.jsx`

Componente do formulário de sugestão.

Simula o envio de um novo serviço.

---

### `AdminSection.jsx`

Componente da área administrativa conceitual.

Mostra dados simulados em cards.

---

### `Footer.jsx`

Componente do rodapé.

Apresenta informações finais do projeto.

---

## Como rodar o projeto

Abra o terminal na pasta do projeto:

```powershell
cd "C:\Users\Aluno\Desktop\90908\Projeto Integrador\velaris-petcare-v0.5"
```

Instale as dependências:

```powershell
npm install
```

Execute o projeto:

```powershell
npm run dev
```

Depois, abra no navegador o endereço exibido no terminal.

Normalmente será algo como:

```text
http://localhost:5173
```

ou

```text
http://localhost:5174
```

---

## Como gerar a versão de produção

Para gerar o build de produção:

```powershell
npm run build
```

---

## Relação com Engenharia de Software

O projeto aplica conceitos básicos de Engenharia de Software, como:

* levantamento de requisitos;
* organização de funcionalidades;
* prototipação;
* componentização;
* separação de responsabilidades;
* estruturação de dados;
* validação visual do fluxo do usuário.

---

## Requisitos funcionais

### RF001 — Visualizar apresentação do projeto

O usuário deve conseguir visualizar o nome, slogan e objetivo da plataforma.

### RF002 — Listar serviços pet

O sistema deve exibir uma lista de serviços pet cadastrados de forma simulada.

### RF003 — Buscar serviços

O usuário deve conseguir buscar serviços por nome, bairro ou categoria.

### RF004 — Visualizar detalhes do serviço

O usuário deve conseguir visualizar descrição, endereço, contato, horário, categoria e bairro do serviço.

### RF005 — Sugerir novo serviço

O usuário deve conseguir preencher um formulário sugerindo um novo serviço para a comunidade.

### RF006 — Visualizar painel administrativo conceitual

O sistema deve exibir uma área administrativa demonstrativa com números simulados.

---

## Requisitos não funcionais

### RNF001 — Simplicidade

O sistema deve ser simples, leve e fácil de entender.

### RNF002 — Responsividade

O layout deve se adaptar a telas menores.

### RNF003 — Usabilidade

A navegação deve ser clara e intuitiva.

### RNF004 — Organização

O código deve ser separado em componentes.

### RNF005 — Manutenibilidade

A estrutura deve permitir futuras melhorias sem grande dificuldade.

---

## Relação com a comunidade

O Velaris PetCare contribui com a comunidade ao facilitar o acesso a serviços pet locais.

A plataforma ajuda:

* moradores que precisam encontrar serviços confiáveis;
* pequenos pet shops que desejam divulgar seus atendimentos;
* clínicas e prestadores locais que precisam de mais visibilidade;
* donos de pets que buscam praticidade e organização.

---

## Relação com o tema Conecta Comunidade

O projeto dialoga com o tema **Conecta Comunidade** porque aproxima pessoas e pequenos negócios locais.

A plataforma centraliza informações que normalmente ficam espalhadas em redes sociais, grupos de mensagens ou indicações informais.

Assim, o sistema ajuda a tornar a divulgação mais organizada, acessível e útil para a população.

---

## Possíveis melhorias futuras

Em versões futuras, o projeto pode evoluir com:

* login de usuários;
* cadastro real de pet shops;
* banco de dados;
* sistema real de agendamento;
* avaliações de usuários;
* painel administrativo funcional;
* integração com WhatsApp;
* filtros mais avançados;
* mapa com localização;
* upload de imagens;
* backend com API.

---

## Status do projeto

Projeto em versão inicial: **v0.5**

Status:

* protótipo funcional;
* sem backend;
* com dados simulados;
* pronto para apresentação acadêmica;
* adequado como MVP simples.

---

## Autor

Projeto desenvolvido para fins acadêmicos no Projeto Integrador do curso de Análise e Desenvolvimento de Sistemas.

**Nome do projeto:** Velaris PetCare
**Versão:** 0.5
**Tema:** Conecta Comunidade
**Tipo:** Protótipo Front-End em React
