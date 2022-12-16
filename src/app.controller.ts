import { Controller, Get, InternalServerErrorException, Render, Req } from '@nestjs/common';
import { AppService } from './app.service';
import * as jwt from 'jsonwebtoken';
import { google } from '../config.json';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  getRoot(@Req() req:any) {
    return { isCookie: req.cookies['google_token'] };
  }
}
