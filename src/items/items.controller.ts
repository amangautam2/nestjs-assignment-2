import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';

import { ItemsService } from './items.service';
import { Item } from './interface/items.interface';
import { CreateItemDto } from './dto/createItem.dto';

@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService) {}

    @Get()
    findAll(): Promise<Item[]> {
      return this.itemsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id): Promise<Item> {
      return this.itemsService.findOne(id);
    }
  
    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item> {
      return this.itemsService.create(createItemDto);
    }
  
    @Delete(':id')
    delete(@Param('id') id): Promise<Item> {
      return this.itemsService.delete(id);
    }
  
    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
      return this.itemsService.update(id, updateItemDto);
    }
}