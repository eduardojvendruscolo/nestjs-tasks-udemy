import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TaskStatus } from './task.status.enum';

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  status: TaskStatus;

  @Column({ length: 100, nullable: true })
  description: string;
}
