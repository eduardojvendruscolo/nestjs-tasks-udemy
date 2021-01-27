import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5462,
  password: 'postgres',
  username: 'postgres',
  database: 'bancoprojeto',
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  synchronize: false,
  logging: true,
  migrations: ['src/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

// possível solucao para o multi tenant e conexcoes com bancos de dados
//https://github.com/typeorm/typeorm/issues/5350

//https://stackoverflow.com/questions/52187328/how-to-specify-ormconfig-ts-for-typeorm\
//https://dev.to/wandealves/migrations-com-typeorm-no-nodejs-4i80
