<div align="center">

<img src="./public/dumbbell.svg" alt="Ícone de halter do projeto GYM" width="68" />

# GYM — Website para Academia

**Uma experiência digital moderna para apresentar serviços, profissionais e planos de uma academia.**

Projeto de interface desenvolvido com **React 18**, **Vite 5** e **Tailwind CSS 3**, com foco em navegação, apresentação visual e adaptação a diferentes telas.

[![Ver demonstração](https://img.shields.io/badge/Ver_demonstra%C3%A7%C3%A3o-111827?style=for-the-badge&logo=vercel&logoColor=white)](https://gym-academia.vercel.app/)
[![Código-fonte](https://img.shields.io/badge/C%C3%B3digo_fonte-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AlbericoJr/GYM)

</div>

---

## 📸 Prévia do projeto

![Captura de tela do website GYM](./public/GYM-print.png)

## 📖 Sobre

O **GYM** é um website demonstrativo para uma academia, criado para apresentar sua proposta, serviços e informações de forma clara e visualmente atraente.

O projeto explora o desenvolvimento de interfaces com componentes React, estilização responsiva e organização de seções voltadas à experiência de navegação. **Não representa, por si só, um sistema de matrículas, cobrança ou agendamento integrado a serviços reais.**

## ✨ Recursos e seções

A organização do código inclui componentes e páginas para:

- **Apresentação inicial:** identidade da academia e conteúdo de destaque.
- **Sobre e serviços:** informações institucionais e apresentação dos serviços.
- **Planos:** seção para apresentar opções e valores.
- **Profissionais:** área dedicada aos treinadores.
- **IMC:** seção de índice de massa corporal; consulte a demonstração para conferir seu comportamento.
- **Contato:** informações e elementos de contato.
- **Navegação visual:** componentes reutilizáveis, ícones e elementos deslizantes.

> As seções acima foram identificadas na estrutura do código. A disponibilidade de integrações externas, envio de formulários ou operações reais deve ser verificada antes do uso em produção.

## 🛠️ Tecnologias

| Tecnologia | Utilização |
| --- | --- |
| **React 18** | Criação de componentes e interfaces |
| **Vite 5** | Ambiente de desenvolvimento e build |
| **JavaScript / JSX** | Lógica e composição dos componentes |
| **Tailwind CSS 3** | Estilização com classes utilitárias |
| **React Router DOM 6** | Recursos de roteamento |
| **Swiper 11** | Componentes de apresentação deslizante |
| **Lucide React** | Ícones |
| **ESLint** | Verificação estática do código |

## 🚀 Executando localmente

**Pré-requisitos:** Node.js compatível com Vite 5, npm e Git.

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

## 📁 Estrutura geral

```text
GYM/
├── public/           # Imagens e arquivos estáticos
├── src/
│   ├── components/   # Componentes compartilhados
│   ├── pages/        # Seções e páginas do site
│   ├── App.jsx       # Composição principal
│   ├── main.jsx      # Entrada da aplicação
│   └── index.css     # Estilos
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

- [ ] Revisar acessibilidade e navegação por teclado.
- [ ] Adicionar testes para componentes e interações principais.
- [ ] Verificar desempenho e otimização de imagens.
- [ ] Validar formulários e definir integrações reais de contato, caso necessárias.
- [ ] Configurar CI para build e lint em pull requests.

## 👨‍💻 Autor

Desenvolvido por **Albérico Júnior** como projeto de portfólio e aprendizado.

[GitHub](https://github.com/AlbericoJr) · [LinkedIn](https://www.linkedin.com/in/alberico-junior/) · [Portfólio](https://albericojr-portfolio-xi.vercel.app/)

---

<div align="center">

**GYM — design, tecnologia e uma experiência de navegação voltada ao universo fitness.**

</div>
