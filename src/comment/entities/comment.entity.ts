import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema({ timestamps: true, versionKey: false })
export class Comment {
  _id: ObjectId;

  @Prop({ type: String })
  postId: string;

  @Prop({ type: String })
  userId: string;

  @Prop()
  body: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
