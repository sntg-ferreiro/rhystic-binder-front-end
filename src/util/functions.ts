import { card } from "../types/types.types"

export const transformToDisplay = (cards: card[], avatar_img: string, user_name: string) => {
    return cards.map((k: card) => { return { ...k, user_avatar_img: avatar_img, user_name } })
}