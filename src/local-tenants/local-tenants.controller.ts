import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { LocalTenantsService } from './local-tenants.service';
import { CreateLocalTenantDto } from './dto/create-local-tenant.dto';
import { ChangeStatusTenantDto } from './dto/change-status.dto';

@Controller('local-tenants')
export class LocalTenantsController {
  constructor(private readonly localTenantsService: LocalTenantsService) {}

  @Post('create')
  create(@Body() dto: CreateLocalTenantDto) {
    return this.localTenantsService.create(dto);
  }

  @Get(':tenant_id/status')
  checkStatus(@Param('tenant_id') tenant_id: string) {
    return this.localTenantsService.checkStatus(tenant_id);
  }

  @Get()
  findAll() {
    return this.localTenantsService.findAll();
  }

  @Patch('change-status')
  changeStatus(@Body() dto: ChangeStatusTenantDto) {
    return this.localTenantsService.changeStatus(dto);
  }
}
