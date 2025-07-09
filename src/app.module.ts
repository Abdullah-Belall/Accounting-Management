import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FreetrialsTenantsModule } from './freetrials-tenants/freetrials-tenants.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { LocalTenantsModule } from './local-tenants/local-tenants.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        migrations: [__dirname + '/migrations/*.{js,ts}'],
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    FreetrialsTenantsModule,
    LocalTenantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude({
        path: 'local-tenants/:tenant_id/status',
        method: RequestMethod.GET,
      })
      .forRoutes('*');
  }
}
