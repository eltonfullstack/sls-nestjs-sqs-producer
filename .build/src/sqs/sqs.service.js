"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqsService = void 0;
const common_1 = require("@nestjs/common");
const client_sqs_1 = require("@aws-sdk/client-sqs");
let SqsService = class SqsService {
    constructor() {
        this.sqsClient = new client_sqs_1.SQSClient({ region: 'us-east-1' });
        this.queueUrl = 'https://sqs.us-east-1.amazonaws.com/440292544878/sqs-message';
    }
    async sendMessage(messageBody) {
        const command = new client_sqs_1.SendMessageCommand({
            QueueUrl: this.queueUrl,
            MessageBody: messageBody,
        });
        try {
            await this.sqsClient.send(command);
        }
        catch (error) {
            console.error('Error sending message to SQS:', error);
            throw error;
        }
    }
};
exports.SqsService = SqsService;
exports.SqsService = SqsService = __decorate([
    (0, common_1.Injectable)()
], SqsService);
//# sourceMappingURL=sqs.service.js.map