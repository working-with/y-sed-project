import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LogService extends Logger {
  constructor(private readonly configService: ConfigService) {
    super();
  }

  log(message: any, context = 'Empty') {
    if (this.configService.get<string>('NODE_ENV') === 'production') {
      return;
    }
    super.log(message, context);
  }

  debug(message: any, context = 'Empty') {
    if (this.configService.get<string>('NODE_ENV') === 'production') {
      return;
    }
    super.debug(message, context);
  }

  verbose(message: any, context = 'Empty') {
    super.verbose(message, context);
  }

  warn(message: any, context = 'Empty') {
    super.warn(message, context);
  }

  error(message: any, trace?: string, context = 'Empty') {
    super.error(message, trace, context);
  }
}
