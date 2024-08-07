import { Injectable } from '@nestjs/common';
import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';

@Injectable()
export class SqsService {
  private readonly sqsClient = new SQSClient({ region: 'us-east-1' }); // Adjust region as needed
  private readonly queueUrl =
    'https://sqs.us-east-1.amazonaws.com/440292544878/sqs-message'; //process.env.SQS_QUEUE_URL;

  async sendMessage(messageBody: string): Promise<void> {
    const command = new SendMessageCommand({
      QueueUrl: this.queueUrl,
      MessageBody: messageBody,
    });

    try {
      await this.sqsClient.send(command);
    } catch (error) {
      console.error('Error sending message to SQS:', error);
      throw error;
    }
  }
}
