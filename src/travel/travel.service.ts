import { Injectable } from '@nestjs/common';

@Injectable()
export class TravelService {
    private trips = [
        { id: 1, name: 'To china', price: 9000},
        { id: 2, name: 'To Morocco', price: 4000},
    ];
}
