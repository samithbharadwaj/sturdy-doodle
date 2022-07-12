import { Module } from '@nestjs/common';
import { ReplyService } from './reply.service';
import { ReplyController } from './reply.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReplySchema } from './entities/reply.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Reply', schema: ReplySchema }]),
  ],
  controllers: [ReplyController],
  providers: [ReplyService],
})
export class ReplyModule {}
