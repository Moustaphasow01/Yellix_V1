import type { IconName } from "@/lib/icon-map";

export type NavigationItem = {
  label: string;
  href: string;
};

export type Metric = {
  label: string;
  detail: string;
  value?: number;
  prefix?: string;
  suffix?: string;
  display?: string;
};

export type Sector = {
  slug: string;
  title: string;
  heroTitle: string;
  description: string;
  detailedHero: string;
  accent: string;
  icon: IconName;
  focus: string[];
  challenges: string[];
  interventions: string[];
  relatedServices: string[];
  ctaLabel: string;
};

export type Service = {
  slug: string;
  title: string;
  icon: IconName;
  summary: string;
  value: string;
  useCases: string[];
};

export type HeroCapability = {
  title: string;
  description: string;
};

export type ServicePillar = {
  title: string;
  description: string;
};

export const siteNavigation: NavigationItem[] = [
  { label: "À propos", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

export const keyMetrics: Metric[] = [
  {
    label: "Secteurs couverts",
    detail: "Télécommunications, énergie, agriculture et élevage.",
    value: 4,
  },
  {
    label: "Services mobilisables",
    detail: "Audit, ingénierie, déploiement, maintenance, exploitation, support, conseil et solaire.",
    value: 9,
  },
  {
    label: "Expérience cumulée",
    detail: "Une expérience mobilisée sur des opérations techniques, multi-sites et multisectorielles.",
    value: 22,
    suffix: "+",
  },
  {
    label: "Couverture territoriale",
    detail: "Présence opérationnelle dans les 14 régions du Sénégal.",
    display: "14 régions",
  },
];

export const contactDetails = {
  email: "contact@yellix.com",
  phone: "+221 77 637 94 69",
  address: "Coordonnées administratives communiquées sur demande",
  zone: "Présence dans les 14 régions du Sénégal",
};

export const coverageRegions = [
  "Dakar",
  "Diourbel",
  "Fatick",
  "Kaffrine",
  "Kaolack",
  "Kédougou",
  "Kolda",
  "Louga",
  "Matam",
  "Saint-Louis",
  "Sédhiou",
  "Tambacounda",
  "Thiès",
  "Ziguinchor",
];

export const heroCapabilities: HeroCapability[] = [
  {
    title: "Expérience",
    description: "22 ans d'expérience cumulée sur des opérations techniques et multi-sites.",
  },
  {
    title: "Secteurs",
    description: "Télécommunications, énergie, agriculture et élevage.",
  },
  {
    title: "Couverture",
    description: "Présence opérationnelle dans les 14 régions du Sénégal.",
  },
  {
    title: "Exécution",
    description: "Audit, déploiement, maintenance et support d'exploitation.",
  },
];

export const sectors: Sector[] = [
  {
    slug: "telecommunications",
    title: "Télécommunications",
    heroTitle: "Ingénierie, déploiement et maintenance des infrastructures télécoms",
    description:
      "Disponibilité réseau, fiabilité des équipements et continuité de service.",
    detailedHero:
      "Yellix intervient sur les infrastructures télécoms pour sécuriser la disponibilité, la qualité de déploiement et la maintenance des installations.",
    accent: "#2F6BFF",
    icon: "radio",
    focus: [
      "Disponibilité réseau",
      "Fiabilité des équipements",
      "Continuité de service",
    ],
    challenges: [
      "Disponibilité réseau",
      "Fiabilité des équipements",
      "Qualité d'installation",
      "Maintenance préventive et corrective",
    ],
    interventions: [
      "Audit des installations",
      "Ingénierie et préparation des déploiements",
      "Déploiement d’infrastructures et mise en service",
      "Maintenance préventive et corrective",
      "Support opérationnel",
    ],
    relatedServices: ["Audit", "Ingénierie", "Déploiement", "Maintenance", "Support"],
    ctaLabel: "Parlez-nous de votre besoin télécom",
  },
  {
    slug: "energie",
    title: "Énergie",
    heroTitle: "Ingénierie et suivi opérationnel des projets énergétiques",
    description:
      "Fiabilité des installations, sécurité d'exploitation et continuité de service.",
    detailedHero:
      "Yellix accompagne les projets énergétiques par une lecture technique des installations, un déploiement cadré et un suivi orienté exploitation.",
    accent: "#F5A623",
    icon: "batteryCharging",
    focus: ["Fiabilité des installations", "Sécurité d'exploitation", "Performance des équipements"],
    challenges: ["Fiabilité des installations", "Sécurité d'exploitation", "Performance", "Continuité de service"],
    interventions: [
      "Audit technique des sites",
      "Ingénierie et dimensionnement",
      "Déploiement et mise en service",
      "Maintenance des installations",
      "Support à l'exploitation",
    ],
    relatedServices: [
      "Audit",
      "Ingénierie",
      "Déploiement",
      "Maintenance",
      "Exploitation",
      "Support",
    ],
    ctaLabel: "Parlez-nous de votre besoin énergie",
  },
  {
    slug: "agriculture",
    title: "Agriculture",
    heroTitle: "Appui technique aux équipements et opérations agricoles",
    description:
      "Performance des équipements, continuité des opérations et adaptation au contexte d'exploitation.",
    detailedHero:
      "Yellix intervient sur les équipements et infrastructures agricoles avec une approche centrée sur la continuité, la fiabilité et l'appui opérationnel.",
    accent: "#2E8B57",
    icon: "sprout",
    focus: ["Performance des équipements", "Continuité d'exploitation", "Adaptation au contexte terrain"],
    challenges: ["Disponibilité des équipements", "Continuité d'exploitation", "Adaptation au contexte terrain", "Appui technique"],
    interventions: [
      "Audit des besoins et des équipements",
      "Ingénierie et adaptation des solutions",
      "Maintenance des équipements",
      "Support technique et conseil",
    ],
    relatedServices: ["Ingénierie", "Maintenance", "Support", "Conseil"],
    ctaLabel: "Parlez-nous de votre besoin agriculture",
  },
  {
    slug: "elevage",
    title: "Élevage",
    heroTitle: "Maintenance et support des activités d'élevage",
    description:
      "Continuité d'exploitation, maintenance des installations et support opérationnel.",
    detailedHero:
      "Yellix accompagne les activités d'élevage sur les enjeux d'installation, de maintenance et de support pour sécuriser l'activité.",
    accent: "#7C9A3D",
    icon: "shield",
    focus: ["Continuité d'exploitation", "Maintenance des installations", "Support opérationnel"],
    challenges: ["Continuité d'exploitation", "Maintenance", "Disponibilité des installations", "Support terrain"],
    interventions: [
      "Audit des besoins",
      "Définition de solutions adaptées",
      "Maintenance des installations",
      "Support opérationnel",
      "Conseil technique",
    ],
    relatedServices: ["Audit", "Maintenance", "Support", "Conseil"],
    ctaLabel: "Parlez-nous de votre besoin élevage",
  },
];

export const services: Service[] = [
  {
    slug: "audit",
    title: "Audit",
    icon: "clipboardCheck",
    summary:
      "Évaluer l’existant et clarifier le besoin.",
    value: "Clarifier l’existant et les priorités.",
    useCases: [
      "Diagnostic terrain",
      "Priorités",
      "Recommandations",
    ],
  },
  {
    slug: "ingenierie",
    title: "Ingénierie",
    icon: "draftingCompass",
    summary:
      "Concevoir des solutions adaptées au terrain.",
    value: "Transformer un besoin en solution cadrée.",
    useCases: [
      "Études",
      "Conception",
      "Dimensionnement",
    ],
  },
  {
    slug: "deploiement",
    title: "Déploiement",
    icon: "rocket",
    summary:
      "Mettre en œuvre avec méthode et coordination.",
    value: "Mettre en œuvre avec coordination et qualité.",
    useCases: [
      "Pilotage",
      "Coordination",
      "Mise en service",
    ],
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    icon: "wrench",
    summary:
      "Préventif et correctif pour maintenir la disponibilité.",
    value: "Préserver la disponibilité des opérations.",
    useCases: [
      "Préventif",
      "Correctif",
      "Suivi",
    ],
  },
  {
    slug: "exploitation",
    title: "Exploitation",
    icon: "gauge",
    summary:
      "Soutenir la gestion opérationnelle des infrastructures.",
    value: "Soutenir la continuité d’activité.",
    useCases: [
      "Routines",
      "Continuité",
      "Performance",
    ],
  },
  {
    slug: "support",
    title: "Support",
    icon: "headset",
    summary:
      "Assistance technique rapide sur les besoins terrain.",
    value: "Apporter une réponse technique réactive.",
    useCases: [
      "Assistance",
      "Incidents",
      "Actions correctives",
    ],
  },
  {
    slug: "conseil",
    title: "Conseil",
    icon: "briefcaseBusiness",
    summary:
      "Appui technique et stratégique à la décision.",
    value: "Éclairer les prochaines décisions.",
    useCases: [
      "Décision",
      "Optimisation",
      "Cadrage",
    ],
  },
  {
    slug: "fourniture-equipements-solaires",
    title: "Fourniture d'équipements solaires",
    icon: "batteryCharging",
    summary:
      "Approvisionnement en modules, batteries, régulateurs et accessoires.",
    value: "Sécuriser la disponibilité des équipements solaires.",
    useCases: [
      "Modules",
      "Batteries",
      "Régulateurs",
    ],
  },
  {
    slug: "installation-solaire",
    title: "Installation solaire",
    icon: "wrench",
    summary:
      "Pose, raccordement et mise en service des installations photovoltaïques.",
    value: "Déployer des solutions solaires prêtes à l'exploitation.",
    useCases: [
      "Pose",
      "Raccordement",
      "Mise en service",
    ],
  },
];

export const servicePillars: ServicePillar[] = [
  {
    title: "Cadrer",
    description: "Audit, analyse et ingénierie pour qualifier l'existant et définir le périmètre.",
  },
  {
    title: "Exécuter",
    description: "Déploiement et mise en service avec coordination, qualité et pilotage terrain.",
  },
  {
    title: "Maintenir",
    description: "Maintenance, support et suivi d'exploitation pour sécuriser la continuité.",
  },
];

export const whyYellix = [
  {
    title: "Lecture technique et sectorielle",
    description:
      "Qualifier les contraintes d'exploitation et cadrer la réponse attendue.",
    icon: "layers3" as IconName,
  },
  {
    title: "Coordination d'exécution",
    description:
      "Orchestrer les opérations avec méthode, qualité et maîtrise terrain.",
    icon: "route" as IconName,
  },
  {
    title: "Suivi d'exploitation",
    description:
      "Préserver la disponibilité des installations et la continuité d'activité.",
    icon: "leaf" as IconName,
  },
];

export const values = [
  {
    title: "Rigueur",
    icon: "target" as IconName,
  },
  {
    title: "Engagement",
    icon: "shieldCheck" as IconName,
  },
  {
    title: "Fiabilité",
    icon: "network" as IconName,
  },
  {
    title: "Proximité",
    icon: "handshake" as IconName,
  },
  {
    title: "Performance",
    icon: "trendingUp" as IconName,
  },
];

export const processSteps = [
  {
    title: "Analyse du besoin",
    description: "Clarifier les enjeux, les contraintes et les objectifs opérationnels.",
  },
  {
    title: "Audit et cadrage",
    description: "Objectiver la situation et définir un périmètre d’intervention cohérent.",
  },
  {
    title: "Conception de la solution",
    description: "Structurer la réponse technique la plus adaptée au contexte.",
  },
  {
    title: "Déploiement opérationnel",
    description: "Piloter l’exécution avec une logique de qualité et de maîtrise terrain.",
  },
  {
    title: "Suivi, maintenance et support",
    description: "Installer la continuité dans la durée et ajuster selon les besoins.",
  },
];

export const experienceBlocks = [
  {
    title: "Télécommunications",
    description:
      "Infrastructures, maintenance et support réseau.",
  },
  {
    title: "Énergie",
    description:
      "Audit, ingénierie et exploitation des installations.",
  },
  {
    title: "Agriculture",
    description:
      "Accompagnement technique des exploitations.",
  },
  {
    title: "Élevage",
    description:
      "Maintenance et support pour la continuité d’activité.",
  },
];

export const interventionEnvironments = [
  {
    title: "Environnements techniques complexes",
    description:
      "Installations multi-contraintes, infrastructures sensibles et besoins de coordination rigoureuse.",
    icon: "factory" as IconName,
  },
  {
    title: "Besoins de continuité opérationnelle",
    description:
      "Contextes où la disponibilité, la réactivité et la maintenance conditionnent directement l’activité.",
    icon: "network" as IconName,
  },
  {
    title: "Contextes multisectoriels",
    description:
      "Projets hybrides nécessitant une lecture croisée entre technique, exploitation et organisation terrain.",
    icon: "layers3" as IconName,
  },
  {
    title: "Accompagnement long terme",
    description:
      "Interventions inscrites dans la durée pour sécuriser la performance et ajuster les dispositifs.",
    icon: "mapPinned" as IconName,
  },
];

export const experienceBenefits = [
  "Lecture terrain plus rapide",
  "Meilleure anticipation",
  "Exécution plus robuste",
  "Accompagnement plus juste",
];
