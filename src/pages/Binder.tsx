import { FunctionComponent } from "react";
import { user } from '../types/types.types'
import CardCard from "../components/CardCard";
import data_ej from "../../public/data/cartas_ejemplo.json"
import { transformToDisplay } from "../util/functions";

interface BinderProps {

}


const Binder: FunctionComponent<BinderProps> = () => {
    const user: user = data_ej[1]

    let cards = getCardFromUser(user)

    return (
        <>
            <p>Esta es tu Carpeta... </p>
            <ul>
                {cards.map(card =>
                    <li className="flex flex-row" key={card.uuid}>
                        <CardCard card={card} />
                    </li>
                )
                }
            </ul>
        </>
    );
}

export default Binder;

function getCardFromUser(user: user) {
    return transformToDisplay(user.cards, user.avatar_img, user.name);
}
