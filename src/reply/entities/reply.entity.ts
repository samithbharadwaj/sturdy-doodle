import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, Types } from 'mongoose';

export type ReplyDocument = Reply & Document;

@Schema({ timestamps: true, versionKey: false })
export class Reply {
  _id: ObjectId;

  @Prop({
    type: () => Types.ObjectId,
    ref: 'Comment',
  })
  commentId: Types.ObjectId | Comment;

  @Prop({ type: String })
  userId: string;

  @Prop()
  body: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const ReplySchema = SchemaFactory.createForClass(Reply);
