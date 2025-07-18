import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { APP_CONFIG } from './common/constants';
import 'dotenv/config';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(new ValidationPipe());
	app.setGlobalPrefix(APP_CONFIG.BASE_URL_ENDPOINT)

	const PORT = process.env.PORT ?? 3333;

	await app.listen(PORT);
	console.log(`Server is running on http://localhost:${PORT}`);

}
bootstrap();
