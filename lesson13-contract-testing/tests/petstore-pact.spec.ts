import { PactV3, MatchersV3, V3MockServer } from '@pact-foundation/pact';

describe('Petstore API Contract Test', () => {
    const provider = new PactV3({
        consumer: 'petstore-client',
        provider: 'petstore-service'
    });

    after(async () => {
        await provider.executeTest(async (mockServer: V3MockServer) => {
            console.log(`Mock server запущено на ${mockServer.url}`);
            return Promise.resolve();
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
    });
});
