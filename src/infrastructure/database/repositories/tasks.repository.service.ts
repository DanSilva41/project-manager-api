import { Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { ProjectEntity } from '../entities/project.entity';
import { TaskEntity } from '../entities/task.entity';
import { ITasksRepository } from '../../../domain/repositories/tasks-repository.interface';
import { ITask } from '../../../domain/interfaces/task.interface';

@Injectable()
export class TasksRepositoryService
  extends Repository<TaskEntity>
  implements ITasksRepository
{
  constructor(dataSource: DataSource) {
    super(ProjectEntity, dataSource.createEntityManager());
  }

  findAll(userId: number): Promise<ITask[]> {
    return this.findBy({ user: { id: userId } });
  }

  findById(id: number): Promise<ITask | null> {
    return this.findOneBy({ id });
  }

  add(payload: DeepPartial<ITask>) {
    return this.save(payload);
  }

  updateById(id: number, payload: DeepPartial<ITask>) {
    return this.update(id, payload);
  }
}
