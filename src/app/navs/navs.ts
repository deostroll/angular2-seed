import {Component} from 'angular2/core';
import {RouteConfig, Route} from 'angular2/router'
import {TaskList} from '../task/task-list';

@Component({
  selector: 'basic-navs',
  templateUrl: 'app/navs/navs.html'
})
@RouteConfig([
  new Route({
    name: 'TaskList',
    useAsDefault: true,
    path:'/list',
    component: TaskList
  })
])
export class BasicNav {

}
