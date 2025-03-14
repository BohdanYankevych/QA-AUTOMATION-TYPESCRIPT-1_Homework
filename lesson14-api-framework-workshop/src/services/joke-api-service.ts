import axios from 'axios';
import { AxiosResponse } from 'axios';

// Інтерфейс для жарту
export interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}

const BASE_URL = 'https://official-joke-api.appspot.com';

export class JokeApiService {
    public static async getRandomJoke(): Promise<AxiosResponse<Joke>> {
        const response = await axios.get<Joke>(`${BASE_URL}/random_joke`);
        return response;  // Повертаємо всю відповідь, а не лише data
    }

    public static async getMultipleJokes(): Promise<AxiosResponse<Joke[]>> {
        const response = await axios.get<Joke[]>(`${BASE_URL}/random_ten`);
        return response;  // Повертаємо всю відповідь
    }

    public static async getJokeById(id: number): Promise<AxiosResponse<Joke>> {
        const response = await axios.get<Joke>(`${BASE_URL}/jokes/${id}`);
        return response;
    }
}
