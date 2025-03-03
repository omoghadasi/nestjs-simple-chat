import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ChatroomModule } from './chatroom/chatroom.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:root@mongo:27017/chatDB?authSource=admin',
    ),
    UsersModule,
    ChatroomModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
