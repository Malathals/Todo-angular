import { Component, OnInit } from '@angular/core';
import { task } from '../datatype/data';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  taskList: task[] = [];
  taskName: string = '';

  constructor() {}

  ngOnInit(): void {}

  addTask(newTask: string) {
    if (newTask) {
      const taskObj: task = {
        taskName: newTask,
        isCompleted: false,
        isDeleted: false,
      };
      this.taskList.push(taskObj);
    }
  }

  deleteTask(deletedTask: task) {
    const newArray = this.taskList.filter((task) => task !== deletedTask);
    this.taskList = newArray;
  }

  completedTask(completedTask: task) {
    alert('completed');
    console.log(completedTask.isCompleted);
  }
}
