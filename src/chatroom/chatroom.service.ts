import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatRoom, ChatRoomDocument } from './chatroom.schema';
import { Message, MessageDocument } from './message.schema';

@Injectable()
export class ChatRoomService {
  constructor(
    @InjectModel(ChatRoom.name) private chatRoomModel: Model<ChatRoomDocument>,
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  async createRoom(name: string): Promise<ChatRoom> {
    return this.chatRoomModel.create({ name });
  }

  async sendMessage(
    chatRoomId: string,
    sender: string,
    text: string,
  ): Promise<Message> {
    const chatRoom = await this.chatRoomModel.findById(chatRoomId);
    if (!chatRoom) throw new NotFoundException('Chat room not found');

    return this.messageModel.create({ chatRoom: chatRoomId, sender, text });
  }

  async getMessages(chatRoomId: string): Promise<Message[]> {
    return this.messageModel
      .find({ chatRoom: chatRoomId })
      .sort({ createdAt: 1 })
      .exec();
  }
}
