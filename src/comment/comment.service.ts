import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentDocument } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel('Comment') private commentModel: Model<CommentDocument>,
  ) {}

  create(createCommentDto: CreateCommentDto) {
    const newComment = new this.commentModel(createCommentDto);
    return newComment.save();
  }

  findAllCommentsForAPost(postId: string) {
    return this.commentModel.find({ postId: postId }).exec();
  }

  findOne(id: string) {
    return this.commentModel.findById(id);
  }

  update(id: string, updateCommentDto: UpdateCommentDto) {
    return this.commentModel.findByIdAndUpdate(
      id,
      { $set: { ...updateCommentDto } },
      { new: true },
    );
  }

  remove(id: string) {
    return this.commentModel.findByIdAndDelete(id);
  }
}
