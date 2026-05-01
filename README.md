# Visual Software Tech Test: Sistema de Gestão de Usuários

Este projeto é um teste técnico focado em demonstrar uma arquitetura de software desacoplada, utilizando **Facades**, **Inversão de Dependência** para garantir a integridade dos dados e a facilidade de manutenção.

## Link de Produção

A aplicação está disponível e configurada para deploy contínuo em:
 **[https://visual-software-test.devcaioribeiro.workers.dev/](https://visual-software-test.devcaioribeiro.workers.dev/)**

---

## Visão Geral
A plataforma permite a **Listagem** e o **Cadastro de Usuários**. A arquitetura foi desenhada para ser agnóstica a bibliotecas externas, permitindo que ferramentas como React Hook Form, Material UI e React Router sejam substituídas sem impactar a lógica de negócio ou as entidades de domínio.

---

## Arquitetura e Padrões

### 1. Clean Architecture & Use Cases
O projeto separa a intenção do usuário da implementação técnica:
- **Entidades**: Definições de tipos (`User`) e lógica de validação auto-contida.
- **Use Cases**: Classes de comando (`ListUsersUseCase`, `CreateUserUseCase`) que orquestram a lógica de negócio de forma pura, dependendo apenas de uma interface de repositório.

### 2. Inversão de Dependência (DI)
- **Camada de Repositório**: O acesso aos dados é definido por uma interface (`Repository`).
- **Injeção via Contexto**: A implementação concreta do repositório é injetada no topo da aplicação via `RepositoryContext`, permitindo trocar facilmente entre uma API real e um mock em memória.

### 3. Facades de Infraestrutura
- **Form Facade**: Um hook customizado (`useForm`) que isola o **React Hook Form**. Ele utiliza um **Adapter** para converter as validações das entidades para o formato de erros da biblioteca.
- **UI Facade**: O **Material UI** é encapsulado em componentes atômicos, protegendo a aplicação de mudanças na biblioteca de design.
- **Routing Facade**: Abstração sobre o **React Router** para navegação e definição de rotas, evitando o "leaky abstraction" de tipos da biblioteca para as views.

---

## Estrutura de Pastas

A organização do diretório `src` reflete o compromisso com o desacoplamento:

```text
src/
├── assets/                 # Assets estáticos (Logotipo)
├── shared/
│   ├── form/               # Facade do gerenciador de formulários e adapters
│   ├── infra/
│   │   ├── query/          # Hooks de abstração para chamadas assíncronas (Query/Mutation)
│   │   ├── repository/     # Contrato do repositório e provedor de contexto (DI)
│   │   └── router/         # Facade de roteamento (Link, Navigate, Routes)
│   └── ui/                 # Design System (Componentes Facade do MUI)
├── users/
│   ├── entity/             # Regras de negócio puras (Validators com throw)
│   ├── use-cases/          # Classes de caso de uso (Listagem e Criação)
│   ├── presentation/       # Telas e Hooks de domínio
└── composer.tsx                 # Ponto de composição e provedores globais
```

---

## Preparação do Ambiente

### 1. Instalação do Git
Para versionar e baixar o projeto, o [**Git**](https://git-scm.com/) deve estar instalado

### 2. Node.js (Versão 24)
O projeto exige o [**Node.js 24**](https://nodejs.org/en/download). 

Caso utilize o **nvm**, execute:
```bash
nvm install 24
nvm use 24
```

---

## Guia de Execução

### 1. Instalação e Execução
```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Executar testes (Vitest)
npm run test
```

---

## CI/CD e Deploy

### 1. GitHub Actions (Pipeline)
A saúde do código é verificada automaticamente em cada commit via **Github Actions**:
- **TypeScript**: Verificação estática de tipos.
- **Vitest**: Execução de testes unitários de Validadores, Use Cases e Hooks de domínio.

### 2. Hosting (Cloudflare)
Deploy realizado via **Cloudflare** com foco em performance e segurança:

---

## Qualidade e Documentação
- **JSDoc**: Documentação técnica focada em intenção e comportamento, integrada ao IntelliSense.
- **Vitest**: Testes unitários cobrindo o fluxo: Entidade -> Caso de Uso -> Hook de Domínio.
