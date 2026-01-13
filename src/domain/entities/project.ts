import { IProject } from '../interfaces/project.interface';
import { Task } from './task';

export class Project implements IProject {
  description: string;
  id: number;
  name: string;
  tasks: Task[];
  user: User;
}
