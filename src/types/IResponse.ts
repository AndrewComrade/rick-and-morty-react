import { ICharacter } from './ICharacter';

export interface IInfo {
    readonly count: number;
    readonly pages: number;
    readonly next: string;
    readonly prev: string;
}

export interface IResponse {
    readonly info: IInfo;
    readonly results: ICharacter[];
}
