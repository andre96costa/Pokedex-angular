import { Type } from './Type';

export interface Pokemon {
    image: string,
    number: Number,
    name: string,
    types: Type[];
}
