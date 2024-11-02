import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";
import { title } from "@/components/primitives";

export default function CoursPage() {
  return (
    <div>
      <section className="flex w-full flex-col items-center justify-center gap-4 py-8 md:py-10">
      <span className={title()}>Les Cours&nbsp;</span>
      <Card className="max-w-[810px]">
              <CardHeader className="flex gap-3">
                <p className="text-md">Yoga Prénatal</p>
              </CardHeader>
              <Divider/>
              <CardBody>
              <p>Une pratique douce et adaptée pour les futures mamans, intégrant la méthode De Gasquet. Conçu pour renforcer le corps, améliorer la respiration et apporter une relaxation profonde. Préparez-vous sereinement à l&apos;accouchement tout en maintenant votre bien-être physique et émotionnel. 🌸</p>
              </CardBody>
              <Divider/>
            </Card>
            <Card className="max-w-[810px]">
             <CardHeader className="flex gap-3">
                <p className="text-md">Yoga Postnatal</p>
              </CardHeader>
             <Divider/>
              <CardBody>
                <p>Un espace pour les nouvelles mamans, basé sur la méthode De Gasquet. Axé sur la récupération, il renforce le corps, améliore la posture et soutient le bien-être émotionnel. Rétablissez l&apos;équilibre physique et mental après l&apos;accouchement avec des exercices doux et réparateurs. 🌿</p>
             </CardBody>
              <Divider/>
            </Card>

            <Card className="max-w-[810px]">
              <CardHeader className="flex gap-3">
                <p className="text-md">Rebozo</p>
             </CardHeader>
             <Divider/>
             <CardBody>
               <p>Une technique inspirée des traditions mexicaines, utilisant un foulard rebozo pour étirer et masser le corps. Favorise la relaxation, soulage les tensions et améliore la circulation. Parfait pour les futures et nouvelles mamans cherchant à retrouver confort et bien-être. 🌺</p>
             </CardBody>
              <Divider/>
            </Card>
            <Card className="max-w-[810px]">
              <CardHeader className="flex gap-3">
                <p className="text-md">Yoga Senior</p>
              </CardHeader>
              <Divider/>
              <CardBody>
               <p>Conçu pour améliorer la flexibilité, l&apos;équilibre et la force des aînés. Utilise des mouvements doux et des postures adaptées pour favoriser la mobilité et le bien-être général. Un espace sécurisé et bienveillant pour maintenir une vie active et en bonne santé. 🌟</p>
              </CardBody>
              <Divider/>
            </Card>
            <Divider/>
            <span className={title()}>Tarifs&nbsp;</span>
        </section>
    </div>
  );
}
