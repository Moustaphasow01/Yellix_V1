# Yellix — Cahier des charges complet du site vitrine

Version: V1  
Date: 11 mars 2026  
Statut: Préconception UX/UI + wireframes détaillés + cadrage contenu  
Usage: Document directement exploitable par Codex / designer UI / développeur front

---

# 1. Objectif du projet

Refondre totalement le site actuel de Yellix pour créer un **site vitrine corporate premium**, moderne, fluide, crédible et orienté conversion.

Le site actuel ne doit pas être repris ni ajusté à la marge. La recommandation validée est de **repartir de zéro**.

Le nouveau site doit :
- présenter clairement Yellix et son positionnement
- exprimer une image **technique, tech, structurée et premium**
- supprimer toute logique marketplace / e-commerce / template générique
- rassurer les prospects, institutions, partenaires et clients
- mettre en avant les secteurs, services et l’expérience cumulée
- être propre, responsive, rapide et exploitable commercialement

---

# 2. Positionnement de marque

## 2.1. Présentation

**Yellix** est une entreprise multisectorielle spécialisée dans :
- les télécommunications
- l’énergie
- l’agriculture
- l’élevage

## 2.2. Offres de services

Yellix intervient autour de 7 offres :
- audit
- ingénierie
- déploiement
- maintenance
- exploitation
- support
- conseil

## 2.3. Cibles

Le site s’adresse à :
- entreprises
- industriels
- institutions
- exploitants
- porteurs de projets
- collectivités
- partenaires techniques

## 2.4. Promesse de marque

**Yellix accompagne les entreprises, institutions et porteurs de projets avec des solutions techniques, opérationnelles et durables dans des secteurs stratégiques.**

## 2.5. Image recherchée

Le site doit transmettre en moins de 5 secondes :
- sérieux
- maîtrise technique
- capacité d’exécution
- expérience
- modernité
- approche terrain

---

# 3. Piliers de crédibilité à mettre en avant

Les chiffres et preuves à afficher prioritairement :
- **4 secteurs stratégiques**
- **7 offres de services**
- **22+ ans d’expérience cumulée**
- **Zones d’intervention couvertes**

À ne pas mettre en avant dans la V1 :
- logique boutique
- produits
- comptes clients
- commandes
- partenaires si la preuve n’est pas encore structurée
- projets si le format “réalisations” n’est pas souhaité

À la place, on utilise une page et des sections **Expérience**.

---

# 4. Objectifs UX du site

Le site doit permettre à un visiteur de comprendre immédiatement :
1. qui est Yellix
2. dans quels secteurs Yellix intervient
3. quels services Yellix propose
4. pourquoi Yellix est crédible
5. comment contacter l’entreprise

## Objectifs UX concrets
- navigation simple
- lecture rapide
- hiérarchie claire
- contenus lisibles en scan
- CTA visibles
- crédibilité rapide
- expérience mobile impeccable
- transitions et micro-interactions premium mais sobres

---

# 5. Structure du site — arborescence V1

## Menu principal
- Accueil
- À propos
- Secteurs d’activité
- Services
- Expérience
- Contact

## Pages futures possibles (hors V1)
- Actualités
- Carrières
- Partenariats
- Version anglaise

---

# 6. Direction artistique globale

## 6.1. ADN visuel

Le site doit mélanger :
- corporate premium
- univers tech crédible
- infrastructure / ingénierie
- terrain / exécution
- lisibilité B2B

Mots-clés design :
- précision
- fiabilité
- technologie
- maîtrise

## 6.2. Ce que le site ne doit pas être

À éviter absolument :
- look WordPress bricolé
- template marketplace re-skinné
- design surchargé
- style startup gadget
- esthétique crypto / néon excessive
- design cheap à base de gros dégradés ou sliders

---

# 7. Palette couleurs

## Palette principale

### Bleu nuit principal
- Hex: `#08131F`
- usage: header, hero, footer, sections premium, fonds stratégiques

### Blanc cassé
- Hex: `#F7F9FC`
- usage: fonds clairs, respiration, contraste, sections de contenu

### Gris graphite
- Hex: `#1F2937`
- usage: textes forts, sous-titres, bordures, icônes

### Gris doux
- Hex: `#6B7280`
- usage: textes secondaires, métadonnées, labels, aides visuelles

### Accent tech principal
- Hex: `#00BFA5`
- usage: boutons primaires, liens, hover, états actifs, accents interactifs

## Accents sectoriels

### Télécommunications
- Hex: `#2F6BFF`

### Énergie
- Hex: `#F5A623`

### Agriculture
- Hex: `#2E8B57`

### Élevage
- Hex: `#7C9A3D`

## Règle de composition
- 80 % du site = bleu nuit / blanc cassé / gris / accent tech
- 20 % = accents sectoriels ponctuels
- pas de site multicolore

---

# 8. Typographie

## Titres
Recommandation :
- **Sora** ou **Space Grotesk**

## Texte courant
Recommandation :
- **Inter** ou **Plus Jakarta Sans**

## Hiérarchie
- H1 : très affirmé, fort impact visuel
- H2 : structurant et lisible
- H3 : précis et court
- corps de texte : simple, aéré, très lisible
- microcopy : discret, technique, propre

---

# 9. Système UI

## Composants généraux
- coins légèrement arrondis
- bordures fines
- ombres très discrètes
- cartes premium bien espacées
- icônes linéaires cohérentes
- CTA visibles
- grille propre
- grande respiration visuelle

## Layout
- largeur max contenu : 1280 px
- grille 12 colonnes
- spacing system : 8 px
- sections verticales généreuses

## Style des boutons
- bouton primaire : fond accent tech, texte clair, hover premium
- bouton secondaire : outline ou fond transparent, contraste élevé
- petit mouvement d’icône en hover
- focus visible clavier

---

# 10. Motion design et animations

## Principes
L’animation doit **améliorer la perception de qualité** sans distraire.

## Animations recommandées
- apparition douce du header
- sticky header avec opacité et blur léger au scroll
- reveal du hero en séquence
- reveal des sections au scroll (fade + translate doux)
- hover lift léger sur cartes
- animation subtile des icônes et flèches
- compteurs animés pour les chiffres clés
- transitions de pages sobres et rapides

## Timings recommandés
- micro-interactions : 180 à 280 ms
- reveals : 400 à 600 ms
- easing doux

## Effets à éviter
- zoom excessif
- parallax lourd
- animations agressives
- effets futuristes gadget

---

# 11. Expérience mobile

Le mobile doit être considéré comme prioritaire.

## Exigences
- header compact et clair
- menu mobile premium plein écran ou panneau latéral propre
- cartes empilées avec lecture facile
- gros CTA visibles
- textes raccourcis si besoin sans perte de sens
- animations allégées
- excellente lisibilité

## Règle
Le mobile ne doit jamais sembler être une version cassée du desktop.

---

# 12. Architecture détaillée des pages

---

# 12.1. Page Accueil

## Objectif
Présenter Yellix, ses secteurs, ses services, son expérience et orienter vers le contact.

## Wireframe détaillé

### Section 1 — Header
Contenu :
- logo Yellix
- menu principal
- bouton CTA “Nous contacter”

Comportement :
- transparent ou semi-transparent sur hero
- devient plus opaque au scroll
- sticky

### Section 2 — Hero
Objectif :
poser immédiatement le positionnement et la crédibilité.

#### Contenu
Badge :
- `22+ ans d’expérience cumulée`

Titre principal :
- **Des solutions techniques et opérationnelles pour les secteurs stratégiques**

Sous-titre :
- Yellix accompagne les entreprises, institutions et porteurs de projets à travers des services d’audit, d’ingénierie, de déploiement, de maintenance, d’exploitation, de support et de conseil dans les télécommunications, l’énergie, l’agriculture et l’élevage.

CTA :
- bouton primaire : **Nous contacter**
- bouton secondaire : **Découvrir nos expertises**

Visuel :
- composition premium mêlant infrastructure, réseau, énergie, ingénierie
- pas de photo cheap générique
- fond avec grille fine ou lignes techniques subtiles

#### UX
Le hero doit transmettre :
- crédibilité
- expertise multisectorielle
- dimension tech
- sérieux B2B

### Section 3 — Chiffres clés
Contenu :
- **4 secteurs stratégiques**
- **7 offres de services**
- **22+ ans d’expérience cumulée**
- **Zones d’intervention couvertes**

Style :
- bande flottante ou bloc détaché
- chiffres visibles
- labels courts
- animation compteur au scroll

### Section 4 — Nos secteurs d’activité
Titre :
- **Nos secteurs d’activité**

Sous-texte :
- Une expertise multisectorielle pour répondre aux enjeux techniques et opérationnels d’environnements stratégiques.

Cartes :
1. Télécommunications  
2. Énergie  
3. Agriculture  
4. Élevage

Contenu type d’une carte :
- icône
- titre
- courte description
- lien “En savoir plus”

Descriptions proposées :

**Télécommunications**  
Solutions d’audit, de déploiement, de maintenance et de support pour les infrastructures et réseaux télécoms.

**Énergie**  
Accompagnement technique et opérationnel pour les projets énergétiques, de l’étude à l’exploitation.

**Agriculture**  
Solutions d’ingénierie, de maintenance et de conseil pour améliorer la performance des exploitations.

**Élevage**  
Approche technique et terrain pour soutenir la continuité, la productivité et l’optimisation des activités d’élevage.

### Section 5 — Nos services
Titre :
- **Une offre complète, de l’analyse à l’exploitation**

Sous-texte :
- Yellix intervient à chaque étape du besoin, de l’évaluation initiale jusqu’au suivi opérationnel dans la durée.

Grille de 7 cartes :
- Audit
- Ingénierie
- Déploiement
- Maintenance
- Exploitation
- Support
- Conseil

Descriptions proposées :

**Audit**  
Évaluation technique, opérationnelle et stratégique pour identifier les besoins, les risques et les opportunités d’amélioration.

**Ingénierie**  
Études, conception et dimensionnement de solutions adaptées aux réalités du terrain.

**Déploiement**  
Mise en œuvre opérationnelle des solutions avec une logique d’exécution rigoureuse.

**Maintenance**  
Maintenance préventive et corrective pour garantir la disponibilité et la performance des installations.

**Exploitation**  
Accompagnement dans la gestion et la continuité opérationnelle des infrastructures.

**Support**  
Assistance technique réactive pour sécuriser les opérations et limiter les interruptions.

**Conseil**  
Appui stratégique et technique pour la prise de décision, l’optimisation et le développement.

### Section 6 — Pourquoi Yellix
Titre :
- **Pourquoi Yellix**

Piliers :
- Expertise multisectorielle
- Exécution terrain
- Approche sur mesure
- Vision durable

Texte court recommandé :
- Yellix combine expertise technique, compréhension terrain et capacité d’exécution pour répondre aux besoins des secteurs stratégiques. Notre approche repose sur la rigueur, la fiabilité et l’accompagnement de bout en bout.

### Section 7 — Expérience
Titre :
- **22+ ans d’expérience cumulée au service des secteurs stratégiques**

Texte :
- Yellix s’appuie sur une expérience consolidée dans les télécommunications, l’énergie, l’agriculture et l’élevage pour accompagner ses clients avec une approche pragmatique, technique et orientée résultats.

Sous-blocs :
- Télécommunications
- Énergie
- Agriculture
- Élevage

### Section 8 — Notre approche
Titre :
- **Notre approche**

Étapes :
1. Analyse du besoin
2. Audit et cadrage
3. Conception de la solution
4. Déploiement opérationnel
5. Suivi, maintenance et support

### Section 9 — CTA final
Titre :
- **Parlons de votre projet**

Texte :
- Nous accompagnons les acteurs publics, privés et institutionnels dans leurs enjeux techniques et opérationnels.

Bouton :
- **Prendre contact**

### Section 10 — Footer
Contenu :
- logo
- courte présentation
- liens rapides
- secteurs
- services
- contact

---

# 12.2. Page À propos

## Objectif
Humaniser, présenter la structure, la mission, la vision et les valeurs.

## Wireframe détaillé

### Hero
Titre :
- **À propos de Yellix**

Sous-texte :
- Une entreprise multisectorielle engagée dans l’accompagnement technique et opérationnel de secteurs stratégiques.

### Section — Qui sommes-nous
Texte proposé :
- Yellix est une entreprise spécialisée dans l’accompagnement technique et opérationnel de secteurs stratégiques tels que les télécommunications, l’énergie, l’agriculture et l’élevage.

### Section — Mission
Texte proposé :
- Apporter des solutions fiables, adaptées et durables grâce à une expertise combinant audit, ingénierie, déploiement, maintenance, exploitation, support et conseil.

### Section — Vision
Texte proposé :
- Contribuer au développement d’infrastructures et d’activités performantes, durables et adaptées aux réalités du terrain.

### Section — Valeurs
Valeurs à présenter sous forme de cartes ou piliers :
- rigueur
- engagement
- fiabilité
- proximité
- performance

### Section — Chiffres clés
- 4 secteurs stratégiques
- 7 offres de services
- 22+ ans d’expérience cumulée
- Zones d’intervention couvertes

### CTA final
- **Nous contacter**

---

# 12.3. Page Secteurs d’activité

## Objectif
Présenter clairement les 4 domaines d’intervention et orienter vers les sous-pages.

## Structure de la page mère

### Hero
Titre :
- **Nos secteurs d’activité**

Sous-texte :
- Yellix accompagne des secteurs stratégiques avec une approche technique, opérationnelle et orientée performance.

### Section — Les 4 secteurs
4 cartes premium :
- Télécommunications
- Énergie
- Agriculture
- Élevage

Chaque carte renvoie vers une sous-page dédiée.

---

## Sous-page 1 — Télécommunications

### Hero
Titre :
- **Solutions techniques pour les infrastructures télécoms**

### Enjeux du secteur
- disponibilité réseau
- qualité d’infrastructure
- maintenance
- déploiement
- continuité de service

### Comment Yellix intervient
- audit des installations et réseaux
- ingénierie et conception
- déploiement d’infrastructures
- maintenance préventive et corrective
- support opérationnel

### Services liés
- audit
- ingénierie
- déploiement
- maintenance
- support

### CTA
- **Parlez-nous de votre besoin télécom**

---

## Sous-page 2 — Énergie

### Hero
Titre :
- **Accompagnement technique pour les projets énergétiques**

### Enjeux du secteur
- fiabilité des installations
- performance
- maintenance
- exploitation
- sécurité opérationnelle

### Comment Yellix intervient
- audit et études techniques
- ingénierie des solutions
- déploiement
- maintenance
- exploitation et support

### CTA
- **Parlez-nous de votre besoin énergie**

---

## Sous-page 3 — Agriculture

### Hero
Titre :
- **Solutions techniques et opérationnelles pour l’agriculture**

### Enjeux du secteur
- performance des exploitations
- fiabilité des équipements
- adaptation terrain
- continuité opérationnelle

### Comment Yellix intervient
- ingénierie de solutions adaptées
- optimisation opérationnelle
- maintenance d’équipements
- support et conseil

### CTA
- **Parlez-nous de votre besoin agriculture**

---

## Sous-page 4 — Élevage

### Hero
Titre :
- **Accompagnement technique pour les activités d’élevage**

### Enjeux du secteur
- continuité de service
- productivité
- maintenance des installations
- accompagnement opérationnel

### Comment Yellix intervient
- audit des besoins
- solutions opérationnelles
- maintenance
- support terrain
- conseil pour l’optimisation

### CTA
- **Parlez-nous de votre besoin élevage**

---

# 12.4. Page Services

## Objectif
Détailler les 7 offres et montrer que Yellix couvre toute la chaîne de valeur.

## Wireframe détaillé

### Hero
Titre :
- **Nos services**

Sous-texte :
- Une offre complète pour accompagner chaque besoin technique et opérationnel, de l’analyse initiale jusqu’au suivi dans la durée.

### Section — Intro
Texte recommandé :
- Yellix propose une offre complète de services pour accompagner ses clients à chaque étape de leurs besoins techniques et opérationnels.

### Sections de service
Créer 7 blocs détaillés :

#### Audit
- objectif
- valeur apportée
- cas d’usage

#### Ingénierie
- études
- conception
- dimensionnement

#### Déploiement
- mise en œuvre
- coordination opérationnelle
- exécution terrain

#### Maintenance
- préventive
- corrective
- continuité de service

#### Exploitation
- gestion opérationnelle
- suivi technique
- performance

#### Support
- assistance technique
- réactivité
- limitation des interruptions

#### Conseil
- aide à la décision
- optimisation
- orientation stratégique

### Section — Méthode d’intervention
Processus en 5 étapes :
1. Analyse
2. Cadrage
3. Conception
4. Mise en œuvre
5. Suivi

### CTA final
- **Nous contacter**

---

# 12.5. Page Expérience

## Objectif
Remplacer la logique “Réalisations / Projets” par une preuve de profondeur métier et de maîtrise sectorielle.

## Positionnement
Cette page n’est pas un portfolio. Elle doit être traitée comme une page de **crédibilité et d’expérience sectorielle**.

## Wireframe détaillé

### Hero
Titre :
- **22+ ans d’expérience cumulée dans les secteurs stratégiques**

Sous-texte :
- Une expertise consolidée dans les télécommunications, l’énergie, l’agriculture et l’élevage.

### Section — Intro
Texte recommandé :
- L’expérience cumulée de Yellix permet d’apporter une réponse structurée, réaliste et performante aux besoins techniques, opérationnels et stratégiques.

### Section — Expérience par domaine
4 blocs :
- Télécommunications : infrastructures, déploiement, maintenance, support
- Énergie : audit, ingénierie, exploitation, maintenance
- Agriculture : accompagnement technique, optimisation, conseil
- Élevage : continuité opérationnelle, maintenance, support

### Section — Environnements couverts
Présenter des types d’interventions et de situations :
- environnements techniques complexes
- besoins de continuité opérationnelle
- contextes multisectoriels
- logiques d’accompagnement long terme

### Section — Ce que cette expérience permet
- meilleure compréhension terrain
- meilleure capacité d’anticipation
- exécution plus robuste
- accompagnement plus adapté

### CTA final
- **Parlons de votre projet**

---

# 12.6. Page Contact

## Objectif
Obtenir des leads qualifiés et permettre une prise de contact rapide.

## Wireframe détaillé

### Hero
Titre :
- **Contactez Yellix**

Sous-texte :
- Parlons de vos besoins techniques, opérationnels et stratégiques.

### Section — Coordonnées
Prévoir :
- email
- téléphone
- adresse si disponible
- zone d’intervention

### Section — Formulaire
Champs recommandés :
- Nom
- Entreprise
- Email
- Téléphone
- Secteur concerné
- Service recherché
- Message

### CTA formulaire
- **Envoyer la demande**

### UX formulaire
- labels clairs
- focus visible
- erreurs élégantes
- remerciement propre

---

# 13. Design system — composants à produire

## Composants prioritaires
- header desktop
- header mobile
- footer
- hero principal
- hero secondaire
- carte secteur
- carte service
- carte pilier
- bloc chiffres clés
- bloc CTA
- timeline/process
- formulaire contact
- badges
- liens texte
- boutons primary/secondary/ghost

## États à prévoir
- default
- hover
- active
- focus
- disabled

---

# 14. Recommandations iconographiques et imagerie

## Icônes
Style recommandé :
- linéaire
- minimal
- technique
- cohérent sur tout le site

## Images
Préférer :
- infrastructures
- terrain
- ingénierie
- énergie
- réseau
- agriculture technique
- activité réelle et crédible

Éviter :
- photos de banque d’images trop génériques
- personnes qui sourient devant ordinateur sans rapport
- images surchargées

## Traitement visuel
- color grading cohérent
- overlays discrets si nécessaire
- cohérence entre tous les visuels

---

# 15. Contenus clés prêts à intégrer

## Hero home
**Des solutions techniques et opérationnelles pour les secteurs stratégiques**

Yellix accompagne les entreprises, institutions et porteurs de projets à travers des services d’audit, d’ingénierie, de déploiement, de maintenance, d’exploitation, de support et de conseil dans les télécommunications, l’énergie, l’agriculture et l’élevage.

## Intro entreprise
**Une expertise multisectorielle au service de vos enjeux**

Yellix met son savoir-faire au service des secteurs stratégiques avec une approche fondée sur la rigueur, l’adaptation au terrain et la performance opérationnelle.

## Bloc expérience
**22+ ans d’expérience cumulée**

Notre expérience dans les télécommunications, l’énergie, l’agriculture et l’élevage nous permet de proposer des solutions adaptées, fiables et durables.

## Bloc services
**Une offre complète, de l’analyse à l’exploitation**

Nous intervenons sur toute la chaîne de valeur : audit, ingénierie, déploiement, maintenance, exploitation, support et conseil.

## CTA final
**Parlons de votre projet**

Nos équipes accompagnent vos besoins techniques et opérationnels avec une approche claire, structurée et orientée résultats.

---

# 16. Exigences techniques et qualité

## Exigences front
- responsive parfait
- animations fluides
- bonnes performances
- structure SEO propre
- composants cohérents
- accessibilité correcte

## Exigences SEO de base
- 1 H1 par page
- métadonnées uniques
- URLs propres
- maillage interne clair
- contenu structuré
- temps de chargement optimisé

## Exigences qualité
- pas d’éléments marketplace
- pas de blocs inutiles
- pas de contenu dupliqué
- pas de sections sans objectif
- pas d’anglais/français mélangés sans stratégie claire

---

# 17. Recommandation stack de développement

## Recommandation
- Next.js
- Tailwind CSS
- Framer Motion
- CMS headless si nécessaire
- formulaire connecté email / CRM

## Pourquoi
- évolutif
- propre
- performant
- facile à maintenir
- idéal pour design system et animations sobres

---

# 18. Phasage projet recommandé

## Phase 1 — Cadrage
- positionnement validé
- arborescence validée
- textes de base validés
- chiffres clés validés

## Phase 2 — UX
- wireframes desktop
- wireframes mobile
- logique de navigation
- hiérarchie de contenu

## Phase 3 — UI
- couleurs
- typo
- composants
- maquettes haute fidélité
- états interactifs

## Phase 4 — Développement
- intégration front
- responsive
- animations
- formulaires
- SEO de base

## Phase 5 — QA
- desktop
- mobile
- vitesse
- cohérence visuelle
- validation CTA
- correction des bugs

---

# 19. Priorités de livraison V1

À livrer en priorité :
- Accueil
- À propos
- Secteurs d’activité
- Services
- Expérience
- Contact

Ce qui peut attendre :
- actualités
- carrière
- version anglaise
- blog avancé
- CRM plus poussé

---

# 20. Résumé décisionnel

La direction validée pour Yellix est :

- refonte complète depuis zéro
- site corporate premium
- identité visuelle tech et crédible
- navigation simple
- mise en avant des 4 secteurs
- mise en avant des 7 services
- valorisation de **22+ ans d’expérience cumulée**
- remplacement de “Réalisations / Projets” par **Expérience**
- design user-friendly, moderne, animé avec sobriété
- structure prête pour implémentation par Codex

---

# 21. Brief ultra-court pour Codex

Construire un site vitrine corporate premium pour Yellix, non e-commerce, avec les pages suivantes : Accueil, À propos, Secteurs d’activité, Services, Expérience, Contact. L’univers visuel doit être tech, premium, propre, multisectoriel, avec dominante bleu nuit, accent tech vert émeraude, typographies modernes, cartes premium, animations sobres, responsive parfait. Les chiffres clés à mettre en avant sont : 4 secteurs stratégiques, 7 offres de services, 22+ ans d’expérience cumulée, zones d’intervention couvertes. La page Expérience remplace la logique Réalisations/Projets. Le site doit donner une impression immédiate de sérieux, maîtrise technique et capacité d’exécution.

