import {IThumbnail} from "./IThumbnail"
import { IUrl } from "./IUrl";

export interface ICharacter {
    id: number;
    name: string;
    description: string;
    thumbnail: IThumbnail;
    urls: IUrl[];
}
