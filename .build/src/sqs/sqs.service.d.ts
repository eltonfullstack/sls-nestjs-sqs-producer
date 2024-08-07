export declare class SqsService {
    private readonly sqsClient;
    private readonly queueUrl;
    sendMessage(messageBody: string): Promise<void>;
}
