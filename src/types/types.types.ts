export type user = {
    name: string;
    avatar_img: string;
    login: Login;
    cards: card[];
}

export type card = {
    name: string,
    img: string,
    uuid: string,
    date_published: string
}

export interface Login {
    uuid: string;
    email: string;
}

export type CardDisplay = {
    name: string,
    img: string,
    uuid: string,
    date_published: string,
    user_avatar_img: string,
    user_name: string;
}
