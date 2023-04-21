import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class OicqFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToWs();
    const client = ctx.getClient();
    const data = ctx.getData();
    console.log(client);
    console.log(data);
    console.log(exception);
    client.send('error');
  }
}
