import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import * as uuid from 'uuid';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;

    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter(task => task.status === status);
    }

    if (search) {
      tasks = tasks.filter(
        task =>
          task.title.includes(search) || task.description.includes(search),
      );
    }

    return tasks;
  }

  getTaskById(id: string): Task {
    let found = this.tasks.find(task => task.id === id);

    if (!found) {
      throw new NotFoundException(`task with id ${id} hasn't been found!`);
    }

    return found;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { description, title } = createTaskDto;

    const task: Task = {
      id: uuid.v1(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  deleteTask(id: string) {
    let objectToRemove = this.getTaskById(id);
    let indexToRemove = this.tasks.indexOf(objectToRemove);
    this.tasks.splice(indexToRemove, 1);
  }

  updateStatusTask(id: string, status: TaskStatus): Task {
    //let index = this.tasks.findIndex(task => task.id === id);
    //this.tasks[index].status = TaskStatus.IN_PROGRESS;

    let taskToUpdateStatus = this.getTaskById(id);
    taskToUpdateStatus.status = status;

    return taskToUpdateStatus;
  }
}
