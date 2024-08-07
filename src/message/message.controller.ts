import { Body, Controller, Post } from '@nestjs/common';
import { SqsService } from '../sqs/sqs.service';

@Controller('messages')
export class MessageController {
  constructor(private readonly sqsService: SqsService) {}

  @Post()
  async sendMessage(@Body('message') message: string) {
    await this.sqsService.sendMessage(message);
    return { status: 'Message sent' };
  }
}
