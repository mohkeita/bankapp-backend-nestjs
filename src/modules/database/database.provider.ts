import { Sequelize } from 'sequelize-typescript';

export const databaseProvider = [
  {
    provider: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5433,
        username: 'postgres',
        password: 'postgres',
        database: 'bankappnode',
      });
      sequelize.addModels([]);
      return sequelize;
    }
  }
]
