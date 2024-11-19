import { title } from "@/components/primitives";
import {User} from "@nextui-org/user";

export default function AboutPage() {
  return (
    <div className="text-justify">
      <User   
      name="Volatiana Landre"
      description="Fondatrice & Professeure"
      avatarProps={{
        isBordered: true,  src: "bio-picture.png", size: "lg"
      }}
    />
      <p>Issue du monde du Luxe, Volatiana a toujours tout fait guidée par la passion.
Elle a bâti sa carrière en tant que danseuse et professeure de danse. Dès l&apos;âge de 5 ans, elle s&apos;est imprégnée de la rigueur du ballet classique sous la tutelle de Michèle Lebert (@ludivinedoumergue à @rythmeetdanseherblay), à l&apos;Opéra de Paris en 1989 et à New York avec la compagnie JAY-T (où elle a fait une tournée dans l&apos;état de New York en 2001). En 2014, elle se spécialise en massage bébé et relation mère-enfant grâce à la formation De Gasquet. Sa propre expérience de maternité renforce son engagement envers le soutien post-partum, complété par une formation en sport, périnée et maternité De Gasquet en 2016. Aujourd&apos;hui, elle relie ses passions pour la danse et le mouvement à travers le Yoga Prénatal, Yoga Postnatal,  des Sessions Senior et des Soins Rebozo ; offrant un soutien holistique à toutes les étapes de la maternité.
</p><p>
Aussi et non des moindres, elle forme aujourd&apos;hui des professionnels de la santé, des professeurs de Yoga et du bien-être grâce à des Masterclass, des YTTC 200h, 50h, 35h et des Retraites bien-être &quot;au Clair de Lune&quot; en Bourgogne ; tous éclairés par la méthode De Gasquet.</p>
</div>
  );
}
