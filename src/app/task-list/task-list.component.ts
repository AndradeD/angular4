import { TaskService } from '../task.service';
import { Component } from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks:Array<Task>;

  constructor(private taskService:TaskService){
    taskService.tasks.push({
      name:'Cozinhar',
      value:50,
      date_launch:'2018/07/07'
    })
    this.tasks = this.taskService.tasks;
  }

}
