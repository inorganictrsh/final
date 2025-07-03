import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocModule } from './modules/doc/doc.module';
import { ColegioModule } from './modules/colegio/colegio.module';
import { AlimentoModule } from './modules/alimento/alimento.module';
import { UserModule } from './modules/user/user.module';
import { EntregaModule } from './modules/entrega/entrega.module';
import { RolModule } from './modules/rol/rol.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get('DB_USER'),
        database: config.get('DB_NAME'),
        entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    DocModule,
    ColegioModule,
    AlimentoModule,
    UserModule,
    EntregaModule,
    RolModule,
  ],
})
export class AppModule {}
