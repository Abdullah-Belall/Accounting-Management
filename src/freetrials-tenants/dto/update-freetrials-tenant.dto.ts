import { PartialType } from '@nestjs/mapped-types';
import { CreateFreetrialsTenantDto } from './create-freetrials-tenant.dto';

export class UpdateFreetrialsTenantDto extends PartialType(CreateFreetrialsTenantDto) {}
