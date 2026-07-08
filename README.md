# Raymer Castañeda — Portfolio

Portafolio técnico bilingüe (ES/EN) construido con Next.js (App Router) y Tailwind CSS.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- 100% estático, listo para Vercel

## Estructura

```
app/
  layout.js          -> layout raíz + fuentes
  page.js             -> redirige a /es
  robots.js
  sitemap.js
  [lang]/
    layout.js         -> metadata por idioma
    page.js           -> home (Hero, Proof, Projects, HowIBuild, CTA)
    projects/[slug]/page.js -> detalle de cada proyecto
components/
  Header.js
  Hero.js
  Proof.js
  Projects.js
  ProjectCard.js
  HowIBuild.js
  CTA.js
  Footer.js
data/
  projects.js         -> contenido bilingüe de cada proyecto
lib/
  dictionary.js        -> diccionario ES/EN (nav, hero, proof, etc.)
```

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

Abre http://localhost:3000 (redirige a /es).

## Despliegue en Vercel

1. Sube este repo a GitHub (por ejemplo bajo `rcm84/raymer-portfolio`).
2. Entra a vercel.com → New Project → importa el repo.
3. Framework detectado automáticamente: Next.js.
4. Deploy. Listo.

## Editar contenido

- **Textos generales (nav, hero, proof, CTA):** `lib/dictionary.js`
- **Proyectos (títulos, descripciones, stack, links):** `data/projects.js`
- **Colores / tipografía:** `tailwind.config.js`

## Idiomas

- Rutas: `/es` y `/en`
- Selector de idioma en el header (esquina superior derecha)
- SEO: cada idioma tiene su propio `<title>`, `<meta description>` y `alternates.languages`

## Notas de diseño

- Estilo: premium/técnico, fondo oscuro (`night`), acento único (`accent`, verde técnico).
- Sin foto de perfil — identidad basada en tipografía y sistema.
- Tipografía: Space Grotesk (display) + Inter (body) + JetBrains Mono (labels/código).

## Contacto configurado

- Email: raymer08024@gmail.com
- GitHub: https://github.com/rcm84
