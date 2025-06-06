import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlashcardsModule } from './flashcards/flashcards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flashcard } from './flashcards/entities/flashcard.entity';
import { databaseConfig, databaseName } from './database/config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '../.env', isGlobal: true }),
    FlashcardsModule,
    TypeOrmModule.forRoot({
      ...databaseConfig,
      database: databaseName,
      entities: [Flashcard],
      synchronize: true,
    } as import('typeorm').DataSourceOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
