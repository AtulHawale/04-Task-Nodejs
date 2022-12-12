import { Body, Controller, Get, Param, Post } from '@nestjs/common';

interface Item {
    id:number,
    name:string,
    price:number
}

@Controller('items')
export class ItemsController {

    items: Item[] = [];
    constructor(){
        this.items.push({id:100,name:"Thermas",price:150});
        this.items.push({id:101,name:"speaker",price:1250});
        this.items.push({id:102,name:"glass",price:50});
        this.items.push({id:103,name:"fan",price:2500});
        this.items.push({id:104,name:"laptop",price:55000});

        console.log("This is Item Controller");
    }

    @Get()
    getAllItems(){
        return this.items; 
    }

    @Get(':id')
  getItem(@Param('id') id: number): Item {
    console.log('Finding movie by id: ' + id);
    console.log(`typeof ${id}(id): ${typeof id}`);

    let result = null;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id == id) {
        result = this.items[i];
        break;
      }
    }

    return result;
  }



  @Post('addItem')
  saveItem(@Body() item: Item): Item {
    console.log('Saving item: ' + JSON.stringify(item));
    //item.id = Math.floor(Math.random() * 100000);
    this.items.push(item);
    return item;
  }
}
