import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageController } from './message/message.controller';
import { SqsService } from './sqs/sqs.service';

@Module({
  imports: [],
  controllers: [AppController, MessageController],
  providers: [AppService, SqsService],
})
export class AppModule {}
