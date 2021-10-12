import axios, { AxiosResponse } from 'axios';
import { IResponse } from '../types/IResponse';
import { IQueryParams } from '../types/IQueryParams';
import { ICharacter } from '../types/ICharacter';

export default class CharactersService {
    static getCharacters(
        params: IQueryParams
    ): Promise<AxiosResponse<IResponse>> {
        return axios.get('https://rickandmortyapi.com/api/character/', {
            params: {
                ...params,
                gender: params.gender === 'All' ? '' : params.gender,
                status: params.status === 'All' ? '' : params.status,
            },
        });
    }

    static getSingleCharacter(id: number): Promise<AxiosResponse<ICharacter>> {
        return axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    }
}
