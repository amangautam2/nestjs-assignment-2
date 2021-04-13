import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ItemsController } from './items.controller';
import { ItemSchema } from './schema/item.schema';
import { ItemsService } from './items.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
    controllers: [ItemsController],
    providers: [ItemsService]
})
export class ItemsModule {}
