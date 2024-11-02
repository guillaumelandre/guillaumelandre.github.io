import { title } from "@/components/primitives";
import {User} from "@nextui-org/user";

export default function AboutPage() {
  return (
    <div>
      <User   
      name="Volatiana Landre"
      description="Fondatrice & Professeure"
      avatarProps={{
        isBordered: true,  src: "bio-picture.png"
      }}
    />
      <p>Volatiana a une histoire unique. Originaire du monde du Luxe, elle a bâti sa carrière en tant que danseuse et professeure de danse. Dès l&apos;âge de 5 ans, elle s&apos;est imprégnée de la rigueur du ballet classique sous la tutelle de Michèle Lebert (@ludivinedoumergue à @rythmeetdanseherblay), à l&apos;Opéra de Paris en 1989 et à New York avec la compagnie JAY-T en 2001. En 2014, elle se spécialise en massage bébé et relation mère-enfant grâce à la formation De Gasquet. Sa propre expérience de maternité renforce son engagement envers le soutien post-partum, complété par une formation en sport, périnée et maternité De Gasquet en 2016. Aujourd&apos;hui, elle relie ses passions pour la danse et le mouvement à travers le yoga prénatal, postnatal, senior et rebozo, offrant un soutien holistique à toutes les étapes de la maternité.</p>
</div>
  );
}
