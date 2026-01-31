import { Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { ProjectEntity } from '../entities/project.entity';
import { UserEntity } from '../entities/user.entity';
import { IUser } from '../../../domain/interfaces/user.interface';
import { IUsersRepository } from '../../../domain/repositories/users-repository.interface';

@Injectable()
export class UsersRepositoryService
  extends Repository<UserEntity>
  implements IUsersRepository
{
  constructor(dataSource: DataSource) {
    super(ProjectEntity, dataSource.createEntityManager());
  }

  findById(id: number): Promise<IUser | null> {
    return this.findOneBy({ id });
  }

  add(payload: DeepPartial<IUser>) {
    return this.save(payload);
  }
}
