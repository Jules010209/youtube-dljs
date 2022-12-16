import { Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { DownloadService } from './download.service';

@Controller('download')
export class DownloadController {
    constructor(private readonly downloadService: DownloadService) {};

    @Get('video/:id')
    async postVideo(@Param('id') id:any, @Req() req:any, @Res() res:any) {
        return this.downloadService.getVideo(id, req, res);
    }

    @Get('music/:id')
    async postMusic(@Param('id') id:any, @Req() req:any, @Res() res:any) {
        return this.downloadService.getMusic(id, req, res);
    }
}
