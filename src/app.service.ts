import { Injectable } from '@nestjs/common';
import { platform } from 'node:process';

@Injectable()
export class AppService {
  getHello(): string {
    return `${platform}`;
  }
}
