import { Verifier } from '@pact-foundation/pact';

describe('Petstore API - Provider Contract Test', () => {
    it('Verifying the provider', async () => {
        const verifier = new Verifier({
            provider: 'petstore-service',
            providerBaseUrl: 'https://petstore.swagger.io/v2',
            pactBrokerUrl: 'https://pact-broker-url.com',
            publishVerificationResult: true
        });

        await verifier.verifyProvider();
    });
});
