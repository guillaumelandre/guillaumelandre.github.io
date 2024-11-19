export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Infini Femmes",
  description: "Cours de Yoga prénatal, postnatal, senior, rebozo, meudon, boulogne, sevres, suresnes, paris",
  navItems: [
    {
      label: "Accueil",
      href: "/",
    },
    {
      label: "Cours",
      href: "/cours",
    },
    {
      label: "Présentation",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Accueil",
      href: "/",
    },
    {
      label: "Cours",
      href: "/cours",
    },
    {
      label: "Présentation",
      href: "/about",
    },
  ],
  links: {
    instagram : "https://www.instagram.com/infinifemmes",
    email: "mailto:hello@infinifemmes.com",
    facebook: "https://facebook.com/infinifemmes",
    yogaforyou: "https://clients.mindbodyonline.com/classic/mainclass?fl=true&tabID=7"
  },
  courses: {
    rebozo: "une technique inspirée des traditions mexicaines, utilisant une fouta ou des lamba lamba malagasy, les soins rebozo servent à  se réapproprier son nouveau corps lorsqu'ils sont effectuée en postpartum. (Ils peuvent être faits en prénatal pour appréhender ce corps en pleine créatione pleine mouvance où chaque jour est une nouvelle découverte). Aussi, il est prouvé que même 12 ans après le corps se souvient et que même 13 années après le corps peut être soigné des blessures ancrées dans le corps. Les soins rebozo favorisent donc la relaxation, soulagent les tensions et améliorent la circulation. Parfait pour toutes les femmes cherchant à retrouver confort et bien-être.",
    senior: "Conçu pour améliorer la flexibilité, l'équilibre et la force des aînés. Utilise des mouvements doux et des postures adaptées pour favoriser la mobilité et le bien-être général. Un espace sécurisé et bienveillant pour maintenir une vie active et en bonne santé.",
    post: "Un espace pour les nouvelles mamans, basé sur la méthode De Gasquet. Axé sur la récupération, il renforce le corps, améliore la posture et soutient le bien-être émotionnel. Rétablissez l'équilibre physique et mental après l'accouchement avec des exercices doux et réparateurs.",
    pre: "Une pratique douce et adaptée pour les futures mamans, intégrant la méthode De Gasquet. Conçu pour renforcer le corps, améliorer la respiration et apporter une relaxation profonde. Préparez-vous sereinement à l'accouchement tout en maintenant votre bien-être physique et émotionnel."
  }
};
