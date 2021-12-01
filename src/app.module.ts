import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationService } from './configuration/configuration.service';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, ConfigurationService],
})
export class AppModule {
  static port: number;

  constructor(
    private readonly configutationService: ConfigurationService
  ){
    AppModule.port = this.configutationService.port as number;
  }


}
