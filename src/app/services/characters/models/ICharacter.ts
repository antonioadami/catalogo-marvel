import {IThumbnail} from "../../models/IThumbnail"

export interface ICharacter {
    id: number,
    title: string,
    description: string,
    thumbnail: IThumbnail
}
