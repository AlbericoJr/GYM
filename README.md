<div align="center">

<img src="./public/dumbbell.svg" alt="Ícone de halter do projeto GYM" width="68" />

# GYM — Website para Academia

**Uma experiência digital moderna para apresentar serviços, profissionais e planos de uma academia.**

Projeto de interface desenvolvido com **React 18**, **Vite 5** e **Tailwind CSS 3**, reformulado com linguagem visual dark fitness, efeitos sutis de entrada e experiência responsiva.

[![Ver demonstração](https://img.shields.io/badge/Ver_demonstra%C3%A7%C3%A3o-111827?style=for-the-badge&logo=vercel&logoColor=white)](https://gym-academia.vercel.app/)
[![Código-fonte](https://img.shields.io/badge/C%C3%B3digo_fonte-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AlbericoJr/GYM)

</div>

---

## 📸 Prévia do projeto

![Captura da versão anterior do GYM — a nova interface precisa de captura atualizada](./public/GYM-print.png)

> Esta captura pertence à versão anterior e será substituída após a validação visual do redesign.

## 📖 Sobre

O **GYM** é um website demonstrativo para uma academia, criado para apresentar sua proposta, serviços e informações de forma clara e visualmente atraente.

O projeto explora o desenvolvimento de interfaces com componentes React, estilização responsiva e organização de seções voltadas à experiência de navegação. **Não representa, por si só, um sistema de matrículas, cobrança ou agendamento integrado a serviços reais.**

## ✨ Recursos e seções

A organização do código inclui componentes e páginas para:

- **Apresentação inicial:** identidade da academia e conteúdo de destaque.
- **Sobre e serviços:** informações institucionais e apresentação dos serviços.
- **Planos:** comparação de opções ilustrativas com alternância mensal/anual e navegação para contato.
- **Profissionais:** área dedicada aos treinadores.
- **Calculadora de IMC:** estimativa para adultos, com validação e classificação informativa.
- **Contato:** formulário acessível que prepara e permite copiar uma mensagem; envio por e-mail somente com destinatário público configurado.
- **Navegação e UX:** páginas React Router, menu mobile, CTA funcionais, página 404, FAQ expansível e animações com suporte a movimento reduzido.

> As seções acima foram identificadas na estrutura do código. A disponibilidade de integrações externas, envio de formulários ou operações reais deve ser verificada antes do uso em produção.

## 🛠️ Tecnologias

| Tecnologia | Utilização |
| --- | --- |
| **React 18** | Criação de componentes e interfaces |
| **Vite 5** | Ambiente de desenvolvimento e build |
| **JavaScript / JSX** | Lógica e composição dos componentes |
| **Tailwind CSS 3** | Estilização com classes utilitárias |
| **React Router DOM 6** | Recursos de roteamento |
| **Lucide React** | Ícones |
| **ESLint** | Verificação estática do código |
| **Node.js (node:test)** | Testes unitários da calculadora |

## 🚀 Executando localmente

**Pré-requisitos:** Node.js **26 LTS** (versão de referência: **26.13.0**), npm e Git. A versão utilizada está definida no arquivo `.nvmrc`.\n\nCom **nvm**, execute `nvm install` e `nvm use` na pasta do projeto; confira com `node --version`.\n\nO `package.json` declara `engines.node: 26.x`, e o GitHub Actions utiliza a versão de `.nvmrc`. Na Vercel, essa configuração seleciona a linha 26.x em novos deployments; valide o runtime após o deploy.

1. Clone o repositório:

```bash
git clone https://github.com/AlbericoJr/GYM.git
cd GYM
```

2. Instale as dependências:

```bash
npm ci
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra o endereço indicado no terminal (geralmente `http://localhost:5173/`).

### Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor Vite |
| `npm run build` | Gera arquivos de produção |
| `npm run preview` | Pré-visualiza o build |
| `npm run lint` | Executa a análise com ESLint |
| `npm test` | Executa testes unitários de IMC |

## ✉️ Configuração do formulário de contato

Este projeto **não possui backend** e não deve afirmar que envia mensagens automaticamente.

- Sem configuração, o formulário valida os campos, prepara e permite copiar a mensagem.
- Para habilitar a abertura do aplicativo de e-mail, copie `.env.example` para `.env.local` e configure `VITE_GYM_CONTACT_EMAIL` com um endereço público e válido.
- Variáveis `VITE_` são públicas no frontend; **nunca coloque senhas, tokens ou chaves secretas** nesses campos.
- O formulário não salva informações do usuário nem processa pagamentos ou matrículas.

Os valores dos planos e os perfis dos treinadores são **ilustrativos**, pois este é um projeto de portfólio.

## 📁 Estrutura geral

```text
GYM/
├── .github/          # Workflow de CI e Dependabot
├── public/           # Imagens e arquivos estáticos
├── src/
│   ├── components/   # Componentes compartilhados e navegação
│   ├── pages/        # Seções e páginas do site
│   ├── utils/        # Cálculos de IMC
│   ├── App.jsx       # Composição principal
│   ├── main.jsx      # Entrada da aplicação
│   └── index.css     # Estilos
├── tests/            # Testes com node:test
├── vercel.json       # Reescrita de rotas para SPA
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎯 Objetivos de aprendizado

- Construir layouts e seções reutilizáveis com React.
- Trabalhar com estilos responsivos usando Tailwind CSS.
- Organizar um projeto front-end com navegação e componentes.
- Integrar bibliotecas de interface e aprimorar a experiência visual.

## 🔎 Evoluções possíveis

- [x] Melhorar acessibilidade básica e navegação por teclado.
- [x] Adicionar efeitos de revelação respeitando `prefers-reduced-motion`.
- [x] Adicionar testes unitários da calculadora de IMC.
- [ ] Adicionar testes de integração de formulários e navegação.
- [ ] Verificar desempenho e otimização de imagens.
- [ ] Validar formulários e definir integrações reais de contato, caso necessárias.
- [x] Configurar CI para lint, testes e build em pull requests.
- [ ] Revisar alertas de dependências e atualizar ferramentas com testes.
- [ ] Atualizar a captura de tela para a nova interface.

## 👨‍💻 Autor

Desenvolvido por **Albérico Júnior** como projeto de portfólio e aprendizado.

[GitHub](https://github.com/AlbericoJr) · [LinkedIn](https://www.linkedin.com/in/alberico-junior/) · [Portfólio](https://albericojr-portfolio-xi.vercel.app/)

---

<div align="center">

**GYM — design, tecnologia e uma experiência de navegação voltada ao universo fitness.**

</div>
