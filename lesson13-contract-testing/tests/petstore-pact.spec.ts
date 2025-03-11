import { PactV3, MatchersV3 } from '@pact-foundation/pact';

describe('Petstore API Contract Test', () => {
    const provider = new PactV3({
        consumer: 'petstore-client',
        provider: 'petstore-service'
    });

    it('Get information about the animal', () => {
        return provider
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

    it('The animal does not exist', () => {
        return provider
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
