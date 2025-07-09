import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FreetrialsTenantsService } from './freetrials-tenants.service';
import { CreateFreetrialsTenantDto } from './dto/create-freetrials-tenant.dto';
import { UpdateFreetrialsTenantDto } from './dto/update-freetrials-tenant.dto';

@Controller('freetrials-tenants')
export class FreetrialsTenantsController {
  constructor(private readonly freetrialsTenantsService: FreetrialsTenantsService) {}

  @Post()
  create(@Body() createFreetrialsTenantDto: CreateFreetrialsTenantDto) {
    return this.freetrialsTenantsService.create(createFreetrialsTenantDto);
  }

  @Get()
  findAll() {
    return this.freetrialsTenantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.freetrialsTenantsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFreetrialsTenantDto: UpdateFreetrialsTenantDto) {
    return this.freetrialsTenantsService.update(+id, updateFreetrialsTenantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.freetrialsTenantsService.remove(+id);
  }
}
