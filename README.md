# goltzman-ui-lab

Ambiente de experimentação focado em interfaces modernas, microinterações, acessibilidade e boas práticas de UX.

## Sobre o projeto

Projeto em React + TypeScript com **vários designers**: uma tela inicial permite escolher qual projeto visualizar. Cada designer é independente (sem ligação entre si).

- **Designer 1 — Etran**: landing page com fluxo Get Started e envio para WhatsApp.
- **Designer 2 — Hero Aperture**: hero moderno e animado (Film Production, Scotland), baseado em [Figma](https://www.figma.com/design/lYz9ZAv7hQ3p3mluirsgy1/portifolio?node-id=0-1).

## O que está implementado

- **Tela de escolha (Picker)**: ao abrir o app, o usuário escolhe entre os designers disponíveis; em cada projeto há "Voltar aos designers" para retornar.
- **Designer 1 (Etran)**: landing com sidebar fixa, seções animadas ao scroll, cards interativos, CTA com imagem, footer; botões "Get started" abrem o cadastro; formulário envia mensagem automática para WhatsApp.
- **Designer 2 (Hero Aperture)**: hero fullscreen com fundo escuro, grid sutil, header (logo APERTURE, tagline, Work / Services / About, Work with Us), título "ICELAND 2025", hint "(Scroll)", palavra "FILM" em destaque, zona de vídeo com botão play e glows; animações de entrada; **sem nenhuma ligação com a landing Etran** (CSS e componentes próprios em `src/designers/hero-aperture/`).
- **Acessibilidade**: `prefers-reduced-motion` (Designer 1), labels e âncoras semânticas.
- **Responsivo (parcial)**: breakpoints básicos em ambos; layout completo para mobile/tablet ainda pendente.

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
