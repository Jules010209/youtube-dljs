import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { DownloadController } from './download/download.controller';
import { DownloadService } from './download/download.service';

@Module({
  controllers: [AuthController, DownloadController],
  providers: [AuthService, DownloadService]
})
export class ControllersModule {}
