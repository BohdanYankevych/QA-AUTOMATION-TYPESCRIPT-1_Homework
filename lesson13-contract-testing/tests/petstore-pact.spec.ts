import { PactV3, MatchersV3, V3MockServer } from '@pact-foundation/pact';
import axios from 'axios';

describe('Petstore API Contract Test', () => {
    const provider = new PactV3({
        consumer: 'petstore-client',
        provider: 'petstore-service'
    });

    let mockServerUrl: string;

    before(async () => {
        await provider.executeTest(async (mockServer: V3MockServer) => {
            mockServerUrl = mockServer.url;
            console.log(`Mock server is launched on ${mockServer.url}`);
        });
    });

    it('Get information about the animal', async () => {
        await provider
            .given('A pet with ID 123 exists')
            .uponReceiving('A request to get pet 123')
            .withRequest({
                method: 'GET',
                path: '/pet/123',
                headers: { Accept: 'application/json' }
            })
            .willRespondWith({
                status: 200,
                headers: { 'Content-Type': 'application/json' },
                body: MatchersV3.like({
                    id: 123,
                    name: 'Fluffy',
                    status: 'available'
                })
            });

        // Відправляємо реальний запит до мока сервера
        const response = await axios.get(`${mockServerUrl}/pet/123`, {
            headers: { Accept: 'application/json' }
        });

        console.log('Response received:', response.data);
    });

    it('The animal does not exist', async () => {
        await provider
            .given('A pet with ID 9999 does not exist')
            .uponReceiving('A request to get pet 9999')
            .withRequest({
                method: 'GET',
                path: '/pet/9999',
                headers: { Accept: 'application/json' }
            })
            .willRespondWith({
                status: 404
            });

        try {
            await axios.get(`${mockServerUrl}/pet/9999`, {
                headers: { Accept: 'application/json' }
            });
        } catch {
            console.log('Expected error 404');
        }
    });
});
