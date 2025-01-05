import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

export default function Job2Page() {

    return (<div>Job 2
        <Link
            className={buttonStyles({
                color: "secondary",
                radius: "sm",
                variant: "shadow",
                })}
                href="/recrutement"
            >
            Retour
            </Link>
    </div>);

}