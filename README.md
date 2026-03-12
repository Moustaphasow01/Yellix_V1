# Yellix

Site vitrine corporate premium construit avec `Next.js`, `TypeScript`, `Tailwind CSS` et `Framer Motion`.

## Stack

- `Next.js` App Router
- `TypeScript`
- `Tailwind CSS v4`
- `Framer Motion`
- export statique via `next build`

## Démarrage

```bash
npm install
npm run dev
```

## Build statique

```bash
npm run build
```

Le build génère un export dans `out/`, directement exploitable sur un hébergement statique.

## Déploiement GitHub Pages

Le repo contient un workflow GitHub Actions dans `.github/workflows/deploy-pages.yml`.

Après push sur `main`:

- si le repo s'appelle `votre-compte.github.io`, le site sera publié à la racine
- sinon il sera publié sous `https://votre-compte.github.io/nom-du-repo/`

Le `basePath` et les URLs SEO sont ajustés automatiquement en build GitHub Pages.

## Prévisualisation du build

```bash
npm run preview
```

## Architecture

- `src/app/` : routes, métadonnées, `sitemap` et `robots`
- `src/components/` : composants UI et sections réutilisables
- `src/data/site.ts` : contenu centralisé du site
- `src/lib/` : utilitaires, mapping d’icônes et helpers SEO

## Points à configurer avant production

- coordonnées réelles dans `src/data/site.ts`
- domaine final dans `src/app/layout.tsx`, `src/app/sitemap.ts` et `src/app/robots.ts`
- branchement du formulaire à un service d’email ou CRM

## Référence fonctionnelle

Le cahier des charges initial est conservé dans `yellix_cahier_des_charges_site_vitrine.md`.
