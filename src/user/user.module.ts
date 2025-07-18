import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { AuthMiddleware } from './middleware/auth.middleware';

@Module({
    controllers: [UserController],
    providers: [UserService]
})

export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes(
                { path:  'users/:username', method: RequestMethod.PATCH},
                { path: 'users/:username', method: RequestMethod.DELETE}
            );
    }
}
