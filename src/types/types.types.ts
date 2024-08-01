export interface Name {
    first: string;
    last: string;
}

export interface Login {
    uuid: string;
}

export interface Users {
    name: Name;
    login: Login;
    email: string;
}

export type card = {
    name: string,
    img: string,
    uuid: string,
    user: user,
    date_published: string
}

export type user = {
    name: string,
    avatar_img: string
}