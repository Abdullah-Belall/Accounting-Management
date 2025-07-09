import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'local_tenants' })
export class LocalTenantsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'uuid' })
  tenant_id: string;
  @Column({ nullable: true })
  phone: string;
  @Column({ type: 'boolean', default: false })
  is_stopped: boolean;
  @Column({ nullable: true })
  stop_reason: string;
  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;
}
