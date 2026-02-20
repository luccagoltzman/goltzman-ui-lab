# goltzman-ui-lab

Ambiente de experimentação focado em interfaces modernas, microinterações, acessibilidade e boas práticas de UX.

## Sobre o projeto

Projeto em React + TypeScript com uma landing page (Etran) e fluxo Get Started. Utiliza design tokens, animações e transições (keyframes, Intersection Observer), e tela de cadastro que redireciona para WhatsApp.

## O que está implementado

- **Landing**: sidebar fixa, seções com animação ao scroll, cards interativos, CTA com imagem de fundo, footer com logo
- **Navegação**: botões da sidebar levam às seções (#productivity, #expense, #technology); botões "Get started" abrem a tela de cadastro
- **Get Started**: formulário (nome, e-mail) e envio da mensagem automática para WhatsApp com frase de parabéns
- **Acessibilidade**: `prefers-reduced-motion` para reduzir animações quando o usuário preferir, labels e âncoras semânticas
- **Responsivo (parcial)**: alguns breakpoints para telas menores (ex.: sidebar em coluna, bento/benefits empilhados)

## O que falta

- **Layout para mobile e tablets**: o layout completo e refinado para dispositivos móveis e tablets ainda não foi implementado. A experiência atual se adapta com breakpoints básicos, mas falta um design específico e otimizado para essas telas (navegação, espaçamentos, tipografia e componentes ajustados para touch e viewports pequenas).

## Como rodar

```bash
npm install
npm run dev
```

## Stack

- React 18, TypeScript, Vite
- CSS com variáveis (design tokens), keyframes e transições
