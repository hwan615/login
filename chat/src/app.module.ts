import { ServeStaticModule } from '@nestjs/serve-static';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { join } from 'path';

@Module({
  imports: [
    EventModule, 
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
      serveRoot: '/hello',
      exclude: ['/hello/api(.*)']
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
