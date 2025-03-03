import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ChatRoomService } from './chatroom.service';

@Controller('chatroom')
export class ChatRoomController {
  constructor(private readonly chatRoomService: ChatRoomService) {}

  @Post()
  createRoom(@Body() body: { name: string }) {
    return this.chatRoomService.createRoom(body.name);
  }

  @Post(':id/message/new')
  sendMessage(
    @Param('id') chatRoomId: string,
    @Body() body: { sender: string; text: string },
  ) {
    return this.chatRoomService.sendMessage(chatRoomId, body.sender, body.text);
  }

  @Get(':id/message')
  getMessages(@Param('id') chatRoomId: string) {
    return this.chatRoomService.getMessages(chatRoomId);
  }
}
