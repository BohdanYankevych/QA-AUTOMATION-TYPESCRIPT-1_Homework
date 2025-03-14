import { expect } from 'chai';
import { JokeApiService } from '../services/joke-api-service';
import { Joke } from '../types/joke-types';
import { type AxiosError, type AxiosResponse } from 'axios';

describe('Joke API Tests', () => {
    it('should return a random joke', async () => {
        const response: AxiosResponse<Joke> = await JokeApiService.getRandomJoke();
        expect(response.status).to.equal(200); // Тепер status на рівні відповіді
        const joke: Joke = response.data;
        expect(joke).to.have.property('setup');
        expect(joke).to.have.property('punchline');
    });

    it('should return multiple jokes', async () => {
        const response: AxiosResponse<Joke[]> = await JokeApiService.getMultipleJokes();
        expect(response.status).to.equal(200); // Статус відповіді
        const jokes: Joke[] = response.data;
        expect(jokes).to.be.an('array');
        expect(jokes.length).to.be.greaterThan(1);
    });

    it('should return a joke by ID', async () => {
        const response: AxiosResponse<Joke> = await JokeApiService.getJokeById(1);
        expect(response.status).to.equal(200);
        const joke: Joke = response.data;
        expect(joke).to.have.property('setup');
        expect(joke).to.have.property('punchline');
    });

    it('should return 404 for a non-existent joke', async () => {
        try {
            await JokeApiService.getJokeById(999999);
        } catch (error) {
            const axiosError = error as AxiosError;
            expect(axiosError.response?.status).to.equal(404); // Перевірка статусу на рівні відповіді
        }
    });

    it('should return ten programming jokes', async () => {
        const response: AxiosResponse<Joke[]> = await JokeApiService.getMultipleJokes();
        expect(response.status).to.equal(200);
        const jokes: Joke[] = response.data;
        expect(jokes.length).to.equal(10);
    });
});
