"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
let server;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.init();
    server = app.getHttpAdapter().getInstance();
}
const handler = async (event) => {
    if (!server) {
        await bootstrap();
    }
    return server(event, null, null);
};
exports.handler = handler;
//# sourceMappingURL=serverless.js.map