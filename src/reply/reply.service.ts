import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
import { ReplyDocument } from './entities/reply.entity';

@Injectable()
export class ReplyService {
  constructor(@InjectModel('Reply') private replyModel: Model<ReplyDocument>) {}

  create(createReplyDto: CreateReplyDto) {
    const newReply = new this.replyModel(createReplyDto);
    return newReply.save();
  }

  findAll() {
    return this.replyModel.find({}).exec();
  }

  findOne(id: string) {
    return this.replyModel.findById(id);
  }

  update(id: string, updateReplyDto: UpdateReplyDto) {
    return this.replyModel.findByIdAndUpdate(
      id,
      { $set: { ...updateReplyDto } },
      { new: true },
    );
  }

  remove(id: string) {
    return this.replyModel.findByIdAndRemove(id);
  }
}
