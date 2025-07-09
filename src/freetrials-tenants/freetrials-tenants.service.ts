import { Injectable } from '@nestjs/common';
import { CreateFreetrialsTenantDto } from './dto/create-freetrials-tenant.dto';
import { UpdateFreetrialsTenantDto } from './dto/update-freetrials-tenant.dto';

@Injectable()
export class FreetrialsTenantsService {
  create(createFreetrialsTenantDto: CreateFreetrialsTenantDto) {
    return 'This action adds a new freetrialsTenant';
  }

  findAll() {
    return `This action returns all freetrialsTenants`;
  }

  findOne(id: number) {
    return `This action returns a #${id} freetrialsTenant`;
  }

  update(id: number, updateFreetrialsTenantDto: UpdateFreetrialsTenantDto) {
    return `This action updates a #${id} freetrialsTenant`;
  }

  remove(id: number) {
    return `This action removes a #${id} freetrialsTenant`;
  }
}
