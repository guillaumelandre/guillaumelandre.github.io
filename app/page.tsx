import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Image } from "@nextui-org/image";
import { title, subtitle } from "@/components/primitives";
import { Courses } from "@/components/courses";
import { Portfolio } from "@/components/portfolio";



export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-2xl text-justify justify-center">
        <span className={title()}>Infini&nbsp;</span>
        <span className={title({ color: "violet" })}>Femmes&nbsp;</span>
        <br />
        <span className={title({ color: "violet" })}>Beautiful&nbsp;</span>
        <span className={title()}>Yoga&nbsp;</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
        Bienvenue dans un espace dédié à votre bien-être, conçu pour vous accompagner durant la grossesse et après l&apos;accouchement avec la méthode De Gasquet. En tant que professeur passionné, je m&apos;engage à vous accompagner tout au long de cette période merveilleuse qu&apos;est la maternité. La méthode De Gasquet, reconnue pour sa douceur et son efficacité, vous aide à maintenir votre bien-être physique et émotionnel. Grâce à des séances adaptées, je vous propose des techniques de respiration, des postures sécuritaires et des exercices de relaxation pour vous préparer sereinement à la naissance et soutenir votre récupération post-natale. Rejoignez-moi pour un voyage de bien-être et d&apos;équilibre, adapté à chaque étape de votre maternité.
        </div>
      </div>

      {/*<div className="flex gap-3">
        <Image
          width={200}
          isZoomed
          alt="Cours Yoga"
          src="pic03.jpg"
        />
      </div>*/}
      <Portfolio/>

      <div className="hidden sm:flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/cours"
        >
          Les cours
        </Link>
      </div>
        
      <div className="sm:hidden">
        <Courses />
      </div>
    </section>
  );
}
