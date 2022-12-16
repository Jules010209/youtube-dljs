import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as ytdl from 'ytdl-core';

@Injectable()
export class DownloadService {
    async getVideo(id:any, req:any, res:any) {
        res.header("Content-Disposition", 'attachment; filename="video.mp4');

        try {
            return ytdl(`https://www.youtube.com/watch?v=${id}`, {
                filter: function(format) {
                    if(format.itag) {
                        return format.itag === 22;
                    }
                },
            }).pipe(res);
        } catch(err) {
            throw new InternalServerErrorException(err);
        }
    }

    async getMusic(id:any, req:any, res:any) {
        try {
            return ytdl(`https://www.youtube.com/watch?v=${id}`).pipe(res);
        } catch(err) {
            throw new InternalServerErrorException(err);
        }
    }
}