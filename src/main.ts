import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP_CONFIG } from './common/constants';
import 'dotenv/config';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix(APP_CONFIG.BASE_URL_ENDPOINT)

	const PORT = process.env.PORT ?? 3000;

	await app.listen(PORT);
	console.log(`Server is running on http://localhost:${PORT}`);

}
bootstrap();
