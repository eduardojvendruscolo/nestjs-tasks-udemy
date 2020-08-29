import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  password: 'postgres',
  username: 'postgres',
  database: 'taskmanagement',
  entities: [__dirname + '/../**/*.entity.{ts,ts}'],
  synchronize: true,
};
