import { Controller } from '@nestjs/common';
import { TravelService } from './travel.service.js';

@Controller('travel')
export class TravelController {
  constructor(private readonly travelService: TravelService) {}
}
