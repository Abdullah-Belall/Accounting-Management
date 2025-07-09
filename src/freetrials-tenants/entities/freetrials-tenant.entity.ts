import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'free_trials_tenants' })
export class FreetrialsTenantEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'uuid' })
  tenant_id: string;
  @Column()
  domain: string;
  @Column({ type: 'boolean', default: false })
  is_stopped: boolean;
  @Column({ type: 'timestamptz' })
  stopped_date: Date;
  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;
}
