import { Module } from '@nestjs/common';
import { ProjectsRepositoryService } from './repositories/projects.repository.service';
import { TasksRepositoryService } from './repositories/tasks.repository.service';
import { UsersRepositoryService } from './repositories/users.repository.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sqlite',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true, // Define database schema by entities (WARNING)
      autoLoadEntities: true, // Fetch relation entities by default (WARNING)
    }),
  ],
  providers: [
    ProjectsRepositoryService,
    TasksRepositoryService,
    UsersRepositoryService,
  ],
  exports: [
    ProjectsRepositoryService,
    TasksRepositoryService,
    UsersRepositoryService,
  ],
})
export class DatabaseModule {}
