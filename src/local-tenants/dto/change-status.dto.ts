import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';

export class ChangeStatusTenantDto {
  @IsUUID()
  tenant_id: string;
  @IsBoolean()
  is_stopped: boolean;
  @IsString()
  @IsOptional()
  stop_reason?: string;
}
