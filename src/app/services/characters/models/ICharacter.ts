import {IThumbnail} from "../../models/IThumbnail"

export interface ICharacter {
    id: number,
    name: string,
    description: string,
    thumbnail: IThumbnail
}
