import { Module } from '@nestjs/common';
import { ItemsController } from './items/items.controller';

//import { AppController } from../app.controllerer';
//import { AppService } from../app.servicece';

@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [],
})
export class AppModule {
  constructor(){
    console.log("This is APP Module");
  }
}
