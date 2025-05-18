import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeController } from './coffees/coffees.controller';

@Module({
  imports: [],
  controllers: [AppController, CoffeeController],
  providers: [AppService],
})
export class AppModule {}
