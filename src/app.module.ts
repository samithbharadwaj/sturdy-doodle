import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comment/comment.module';
import { ReplyModule } from './reply/reply.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/postman-interview'),
    CommentModule,
    ReplyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
