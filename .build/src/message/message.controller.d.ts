import { SqsService } from '../sqs/sqs.service';
export declare class MessageController {
    private readonly sqsService;
    constructor(sqsService: SqsService);
    sendMessage(message: string): Promise<{
        status: string;
    }>;
}
