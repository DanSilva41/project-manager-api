import { IUser } from '../interfaces/user.interface';
import { Project } from './project';

export class User implements IUser {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  password: string;
  projects: Project[];
  tasks: User[];
}
