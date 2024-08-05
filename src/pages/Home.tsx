import { FunctionComponent } from "react";

import data_ej from "../../public/data/cartas_ejemplo.json"
import CardCarousel from "../components/CardCarousel";
import { CardDisplay } from '../types/types.types';
import { transformToDisplay } from "../util/functions";

interface HomeProps {

}



const getCardsToDisplay = () => {
    let result: CardDisplay[] = data_ej.map(user => transformToDisplay(user.cards, user.avatar_img, user.name)).flat(1)
    return result
}


const Home: FunctionComponent<HomeProps> = () => {
    return (
        <>
            <CardCarousel title="Ofertas de Hoy" cards={getCardsToDisplay()} />
            <CardCarousel title="Las Mas Nuevas" cards={getCardsToDisplay()} />
        </>
    );
}

export default Home;