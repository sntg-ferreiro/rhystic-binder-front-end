import { FunctionComponent } from "react";
import { card } from '../types/types.types';

interface CardCardProps {
    card: card
}

const CardCard: FunctionComponent<CardCardProps> = ({ card }) => {
    return (<>
<div className="max-h-72  max-w-96 flex flex-row border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 rounded-b">
        <div className="lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"title={card.name}>
            <img src={card.img} alt={card.name} />
        </div>
        <div className="h-48 lg:h-auto lg:w-48 bg-white rounded-b p-4 flex flex-col justify-between">
            <div>
                <div className="text-gray-900 font-bold text-xl mb-2">{card.name}</div>
                {/* <p className="text-gray-700 text-base truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p> */}
            </div>
            <div className="flex flex-col space-y-4">
                <img className="w-10 h-10 rounded-full mr-2" src={card.user.avatar_img} alt={`Avatar of ${card.user.name}`} />
                <div className="text-sm">
                    <p className="text-gray-900 leading-none">Publicado por:</p>
                    <p className="text-gray-600">{card.user.name}</p>
                    <p className="text-gray-600">{card.date_published}</p>
                </div>
                <div className="flex-initial">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                        Offer
                    </button>
                </div>
            </div>
        </div>
</div>
    </>);
}

export default CardCard;