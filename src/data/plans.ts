import { APP_URL } from "./links";

export type Plan = {
  slug: "scout" | "guardian" | "auditor";
  name: string;
  tagline: string;
  price: string;
  priceSuffix?: string;
  features: string[];
  ctaText: string;
  ctaUrl: string;
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    slug: "scout",
    name: "Scout",
    tagline: "Para testar",
    price: "R$ 0",
    features: [
      "Até 3 sites monitorados",
      "Verificações a cada 10 minutos",
      "Retenção de dados por 3 dias",
      "Alertas por e-mail",
    ],
    ctaText: "Começar Grátis",
    ctaUrl: `${APP_URL}/auth?plan=scout`,
  },
  {
    slug: "guardian",
    name: "Guardian",
    tagline: "Para Freelancers",
    price: "R$ 49",
    priceSuffix: "/mês",
    features: [
      "Até 20 sites monitorados",
      "Verificações a cada 1 minuto",
      "Retenção de dados por 30 dias",
      "Alertas por e-mail e webhook",
    ],
    ctaText: "Assinar Guardian",
    ctaUrl: `${APP_URL}/auth?plan=guardian`,
    highlighted: true,
  },
  {
    slug: "auditor",
    name: "Auditor",
    tagline: "Para Escalar",
    price: "R$ 199",
    priceSuffix: "/mês",
    features: [
      "Mais de 100 sites monitorados",
      "Verificações a cada 1 minuto",
      "Proteção nativa de campanhas no Google Ads e Meta Ads",
      "Retenção de dados por 90 dias",
    ],
    ctaText: "Assinar Auditor",
    ctaUrl: `${APP_URL}/auth?plan=auditor`,
  },
];
