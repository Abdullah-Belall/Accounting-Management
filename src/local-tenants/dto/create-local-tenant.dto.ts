import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateLocalTenantDto {
  @IsUUID()
  tenant_id: string;
  @IsString()
  @IsOptional()
  phone: string;
}
