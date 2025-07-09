import { Module } from '@nestjs/common';
import { FreetrialsTenantsService } from './freetrials-tenants.service';
import { FreetrialsTenantsController } from './freetrials-tenants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FreetrialsTenantEntity } from './entities/freetrials-tenant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FreetrialsTenantEntity])],
  controllers: [FreetrialsTenantsController],
  providers: [FreetrialsTenantsService],
})
export class FreetrialsTenantsModule {}
