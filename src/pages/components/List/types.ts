import {Client} from "../../../services/types.ts";

export interface ListProps{
    onDelete: (id:string) => void
    onUpdate: (id: string) => void
    data: Client[]
}
