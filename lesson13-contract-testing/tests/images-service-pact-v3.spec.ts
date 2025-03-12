// import { MatchersV3, PactV3, Verifier } from '@pact-foundation/pact';
// import { ImageService } from '../src/services/image.service';
// import { ImageDto } from '../src/models/image.dto';
// import { expect } from 'chai';
// import path from 'path';

// describe('Pact v3 Image service contract tests', () => {
//     let imageService:ImageService;

//     const provider = new PactV3({
//         consumer:'image-consumer-v3',
//         provider:'image-provider-v3'
//     });

//     const imageResponseExample: Partial <ImageDto[]> = [
//         {
//             id: '_JITL1lt2',
//             url: 'https://cdn2.thecatapi.com/images/_JITL1lt2.jpg',
//             width: 1200,
//             height: 734,
//             sub_id: 'VILE',
//             created_at: '2025-03-06T13:33:33.000Z',
//             original_filename: 'Cat_August_2010-4.jpg',
//             breed_ids: 'orie',
//             breeds: []
//         } as unknown as ImageDto
//     ];

//     const expectedBody = MatchersV3.like(imageResponseExample);

//     describe('Consumer tests using Pact V3', () => {
//         it('Image service return expected response', () => {
//             return provider
//                 .given('Images exist')
//                 .uponReceiving('A request to get images')
//                 .withRequest({
//                     method: 'GET',
//                     path: '/images',
//                     headers: {
//                         accept: 'application/json',
//                         'x-api-key': 'live_uuprBFKIIvV9ksh2V2afoDdApLX5WVTqEqIsuepjO5HRk02nBq6XgMF5sNNhVuCC'
//                     }


//                 })
//                 .willRespondWith({
//                     status: 200,
//                     headers: {
//                         'Content-Type': 'application/json; charset=utf-8'
//                     },
//                     body: expectedBody
//                 });
//         });

//         it('Run Image Service Consumer test', () => {
//             provider.executeTest(async (mockImageService) => {
//                 imageService = new ImageService(mockImageService.url, 'live_uuprBFKIIvV9ksh2V2afoDdApLX5WVTqEqIsuepjO5HRk02nBq6XgMF5sNNhVuCC');

//                 const images = await imageService.getMyImages();
//                 const filteredImages = images.find((image) => image.id === (imageResponseExample[0])?.id) as ImageDto;

//                 expect(filteredImages).to.contain.keys('id', 'url', 'width', 'height', 'sub_id', 'created_at', 'original_filename', 'breed_ids', 'breeds');
//                 expect(filteredImages.id).to.be.a('string');
//                 expect(filteredImages.url).to.be.a('string');
//                 expect(filteredImages.width).to.be.a('number');
//                 expect(filteredImages.height).to.be.a('number');
//                 expect(filteredImages.sub_id).to.be.a('string');
//                 expect(filteredImages.created_at).to.be.a('string');
//                 expect(filteredImages.original_filename).to.be.a('string');
//                 expect(filteredImages.breed_ids).to.be.a('string');
//                 expect(filteredImages.breeds).to.be.an('array');


//             });
//         });
//     });
//     describe('Pact V3 verification', () => {
//         it('verify provider', () => {
//             return new Verifier({
//                 providerBaseUrl: 'https://api.thecatapi.com/v1',
//                 pactUrls: [path.resolve(process.cwd(), './pacts/image-consumer-v3-image-provider-v3.json')]
//             })
//                 .verifyProvider()
//                 .then(() => {
//                     console.log('Pact Verification Complete!');
//                 });
//         });
//     });
// });
