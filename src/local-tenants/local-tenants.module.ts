import { Module } from '@nestjs/common';
import { LocalTenantsService } from './local-tenants.service';
import { LocalTenantsController } from './local-tenants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalTenantEntity } from './entities/local-tenant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LocalTenantEntity])],
  controllers: [LocalTenantsController],
  providers: [LocalTenantsService],
})
export class LocalTenantsModule {}
