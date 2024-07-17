import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UersController } from './uers/uers.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, UersController],
  providers: [AppService],
})
export class AppModule {}
