import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity/flavor.entity';
import { Event } from 'src/events/entities/event.entity/event.entity';

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService],
  exports: [CoffeesService],
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
})
export class CoffeesModule {}
