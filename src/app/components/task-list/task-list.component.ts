import { Component } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  tarea1: ITask = {
    title: 'Task 1',
    description: 'Descripcion de tarea 1',
    completed: false,
    level: Levels.Info
  }

  tarea2: ITask = {
    title: 'Task 2',
    description: 'Descripcion de tarea 2',
    completed: true,
    level: Levels.urgent
  }

  deleteTask(task:ITask){
    alert(`Esta seguro que quiere elimina la tarea: ${task.title}`)
  }

}
