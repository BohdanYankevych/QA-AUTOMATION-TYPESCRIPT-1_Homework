import { Verifier } from '@pact-foundation/pact';

describe('Petstore API - Provider Contract Test', () => {
    it('Verifying the provider', async () => {
        const verifier = new Verifier({
            provider: 'petstore-service',
            providerBaseUrl: 'https://petstore.swagger.io/v2',
            pactBrokerUrl: 'https://pact-broker-url.com',
            pactUrls: ['https://pact-broker-url.com/pacts/latest'],
            consumerVersionSelectors: [{ latest: true }],
            publishVerificationResult: true,
            providerVersion: '1.0.0'
        });

        await verifier.verifyProvider();
    });
});
