import { Controller, Post, Get } from '@nestjs/common';
import { TravelService} from './travel.service.js';

@Controller('travel')
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  @Get()
  findAll() {
    return this.travelService.findAll();
  }
}
