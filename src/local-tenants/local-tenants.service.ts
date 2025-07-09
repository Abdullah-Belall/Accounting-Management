import {
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateLocalTenantDto } from './dto/create-local-tenant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LocalTenantsEntity } from './entities/local-tenant.entity';
import { Repository } from 'typeorm';
import { ChangeStatusTenantDto } from './dto/change-status.dto';

@Injectable()
export class LocalTenantsService {
  constructor(
    @InjectRepository(LocalTenantsEntity)
    private readonly localTenantsRepo: Repository<LocalTenantsEntity>,
  ) {}
  async create({ tenant_id, phone }: CreateLocalTenantDto) {
    const isExist = await this.localTenantsRepo.findOne({
      where: { tenant_id },
    });
    if (isExist)
      throw new ConflictException(`يوجد مستخدم محلي اخر بنفس المعرف.`);
    const localTenant = this.localTenantsRepo.create({ tenant_id, phone });
    try {
      await this.localTenantsRepo.save(localTenant);
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException();
    }
    return {
      done: true,
    };
  }
  async checkStatus(tenant_id: string) {
    const tenant = await this.localTenantsRepo.findOne({
      where: { tenant_id },
    });
    if (!tenant)
      throw new NotFoundException('لا يوجد مستأجر محلي بهذا المعرف.');
    if (tenant.is_stopped)
      throw new ForbiddenException(
        'نظامك موقوف اتصل بالادارة لمعرفة المزيد من المعلومات.',
      );
    return {
      done: true,
    };
  }
  async findAll() {
    const [tenants, total] = await this.localTenantsRepo.findAndCount();
    return {
      tenants,
      total,
    };
  }
  async changeStatus({
    tenant_id,
    is_stopped,
    stop_reason,
  }: ChangeStatusTenantDto) {
    const tenant = await this.localTenantsRepo.findOne({
      where: {
        tenant_id,
      },
    });
    if (!tenant)
      throw new NotFoundException(`لا يوجد مستأجر محلي بهذا المعرف.`);
    try {
      await this.localTenantsRepo.save({ ...tenant, is_stopped, stop_reason });
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException();
    }
    return {
      done: true,
    };
  }
}
