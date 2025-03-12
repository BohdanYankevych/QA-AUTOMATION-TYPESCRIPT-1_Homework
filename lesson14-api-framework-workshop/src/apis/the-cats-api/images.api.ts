import { ImageDto } from 'src/dtos/the-cats-api';
import { IApiService } from '../../services/interfaces/i-api.service';
import fs from 'fs';


export class ImagesApi{
    public constructor(private apiService: IApiService) {}

    public async uploadImage(imagePath: string, subId?: string, breeds?: string[]): Promise<[Response, ImageDto]> {
        const file = fs.readFileSync(imagePath);
        const binaryFile = new File([file], 'the_cat.jpg', {type: 'image/jpeg'});

        const formData = new FormData();
        formData.append('file', binaryFile);
        subId ? formData.append('sub_id', subId) : null;
        breeds ? formData.append('breeds', breeds.join(',')) : null;

        const response = await this.apiService.post('images/upload', formData);
        const responseJson = await response.json();

        return await [response, responseJson];
    }

    public async getMyImages(): Promise<[Response, ImageDto[]]> {
        const response = await this.apiService.get('/images');
        const responseJson = await response.json();

        return await [response, responseJson];
    }

    public async attachBreedsToImages(imageId: string, breed: string): Promise<[Response, ImageDto]> {
        const body = {
            breed_id: breed
        };

        const response = await this.apiService.post(`images/${imageId}/breeds`, body);
        const responseJson = await response.json();

        return await [response, responseJson];
    }
}
