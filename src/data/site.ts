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
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Secteurs d’activité", href: "/secteurs" },
  { label: "Services", href: "/services" },
  { label: "Expérience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export const keyMetrics: Metric[] = [
  {
    label: "Secteurs stratégiques",
    detail: "Télécommunications, énergie, agriculture et élevage.",
    value: 4,
  },
  {
    label: "Offres de services",
    detail: "Une chaîne complète, de l'audit à l'accompagnement long terme.",
    value: 7,
  },
  {
    label: "Expérience cumulée",
    detail: "Une profondeur métier mobilisable sur des environnements exigeants.",
    value: 22,
    suffix: "+",
  },
  {
    label: "Zones d’intervention",
    detail: "Couverture multi-sites pour des opérations terrain et techniques.",
    display: "Multi-zones",
  },
];

export const contactDetails = {
  email: "contact@yellix.com",
  phone: "+221 77 637 94 69",
  address: "Coordonnées administratives communiquées sur demande",
  zone: "Interventions multi-sites et environnements stratégiques",
};

export const heroCapabilities: HeroCapability[] = [
  {
    title: "Expérience",
    description: "22 ans cumulés au service d’environnements à forte exigence.",
  },
  {
    title: "Secteurs",
    description: "Télécommunications, énergie, agriculture, élevage.",
  },
  {
    title: "Couverture",
    description: "Interventions multi-sites pilotées avec méthode.",
  },
  {
    title: "Exécution",
    description: "Déploiement rigoureux et suivi opérationnel.",
  },
];

export const sectors: Sector[] = [
  {
    slug: "telecommunications",
    title: "Télécommunications",
    heroTitle: "Solutions techniques pour les infrastructures télécoms",
    description:
      "Audit, déploiement et maintenance des réseaux télécoms.",
    detailedHero:
      "Une approche terrain pour sécuriser disponibilité, maintenance et continuité de service.",
    accent: "#2F6BFF",
    icon: "radio",
    focus: [
      "Disponibilité réseau",
      "Qualité d’infrastructure",
      "Continuité de service",
    ],
    challenges: [
      "Disponibilité réseau",
      "Fiabilité des équipements",
      "Qualité de déploiement",
      "Continuité de service",
    ],
    interventions: [
      "Audit des installations",
      "Ingénierie réseau",
      "Déploiement d’infrastructures",
      "Maintenance préventive et corrective",
      "Support technique",
    ],
    relatedServices: ["Audit", "Ingénierie", "Déploiement", "Maintenance", "Support"],
    ctaLabel: "Parlez-nous de votre besoin télécom",
  },
  {
    slug: "energie",
    title: "Énergie",
    heroTitle: "Accompagnement technique pour les projets énergétiques",
    description:
      "Étude, déploiement et suivi des projets énergétiques.",
    detailedHero:
      "Une intervention cadrée pour fiabiliser les installations et soutenir l’exploitation.",
    accent: "#F5A623",
    icon: "batteryCharging",
    focus: ["Fiabilité des installations", "Performance", "Sécurité opérationnelle"],
    challenges: ["Fiabilité des installations", "Performance", "Sécurité", "Exploitation"],
    interventions: [
      "Audit technique",
      "Ingénierie des solutions",
      "Déploiement opérationnel",
      "Maintenance",
      "Exploitation et support",
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
    heroTitle: "Solutions techniques et opérationnelles pour l’agriculture",
    description:
      "Ingénierie, maintenance et conseil pour les exploitations.",
    detailedHero:
      "Des solutions utiles au terrain, pensées pour la continuité et la performance.",
    accent: "#2E8B57",
    icon: "sprout",
    focus: ["Performance des exploitations", "Fiabilité des équipements", "Adaptation terrain"],
    challenges: ["Performance", "Fiabilité des équipements", "Adaptation terrain", "Conseil"],
    interventions: [
      "Ingénierie adaptée",
      "Optimisation opérationnelle",
      "Maintenance d’équipements",
      "Support et conseil",
    ],
    relatedServices: ["Ingénierie", "Maintenance", "Support", "Conseil"],
    ctaLabel: "Parlez-nous de votre besoin agriculture",
  },
  {
    slug: "elevage",
    title: "Élevage",
    heroTitle: "Accompagnement technique pour les activités d’élevage",
    description:
      "Support terrain pour la continuité et la productivité.",
    detailedHero:
      "Une réponse simple et pragmatique pour maintenir les installations et l’activité.",
    accent: "#7C9A3D",
    icon: "shield",
    focus: ["Continuité de service", "Productivité", "Support terrain"],
    challenges: ["Continuité", "Productivité", "Maintenance", "Support terrain"],
    interventions: [
      "Audit des besoins",
      "Solutions adaptées",
      "Maintenance des installations",
      "Support terrain",
      "Conseil",
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
];

export const servicePillars: ServicePillar[] = [
  {
    title: "Concevoir",
    description: "Audit, ingénierie et conseil pour cadrer correctement les besoins.",
  },
  {
    title: "Déployer",
    description:
      "Déploiement et exploitation avec une logique de qualité, de coordination et de terrain.",
  },
  {
    title: "Maintenir",
    description: "Maintenance et support pour assurer la continuité et limiter les interruptions.",
  },
];

export const whyYellix = [
  {
    title: "Lecture sectorielle",
    description:
      "Une compréhension croisée des télécommunications, de l’énergie, de l’agriculture et de l’élevage.",
    icon: "layers3" as IconName,
  },
  {
    title: "Déploiement maîtrisé",
    description:
      "Des interventions coordonnées avec suivi opérationnel et exigence d’exécution.",
    icon: "route" as IconName,
  },
  {
    title: "Suivi durable",
    description:
      "Maintenance, support et accompagnement pour sécuriser les opérations dans le temps.",
    icon: "leaf" as IconName,
  },
];

export const values = [
  {
    title: "Rigueur",
    description: "Une méthode claire et suivie.",
    icon: "target" as IconName,
  },
  {
    title: "Engagement",
    description: "Une implication forte sur le terrain.",
    icon: "shieldCheck" as IconName,
  },
  {
    title: "Fiabilité",
    description: "Des interventions stables et robustes.",
    icon: "network" as IconName,
  },
  {
    title: "Proximité",
    description: "Une approche simple, proche du terrain.",
    icon: "handshake" as IconName,
  },
  {
    title: "Performance",
    description: "Une recherche d’efficacité durable.",
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
