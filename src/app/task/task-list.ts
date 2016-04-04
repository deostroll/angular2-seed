import {View, Component} from 'angular2/core';
import {Task, TaskService} from '../services/db';

@Component({

})
@View({
  templateUrl: 'app/task/task-list.html',
})
export class TaskList {
  tasks: Array<Task>;
  constructor(svc: TaskService) {
    this.tasks = svc.items;
  }
}
