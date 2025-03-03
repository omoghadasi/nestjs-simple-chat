import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatRoomDocument = ChatRoom & Document;

@Schema({ timestamps: true })
export class ChatRoom {
  @Prop({ required: true, unique: true })
  name: string;
}

export const ChatRoomSchema = SchemaFactory.createForClass(ChatRoom);
