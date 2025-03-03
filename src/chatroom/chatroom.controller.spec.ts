import { Test, TestingModule } from '@nestjs/testing';
import { ChatRoomController } from './chatroom.controller';
import { ChatRoomService } from './chatroom.service';

describe('ChatRoomController', () => {
  let controller: ChatRoomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatRoomController],
      providers: [ChatRoomService],
    }).compile();

    controller = module.get<ChatRoomController>(ChatRoomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
