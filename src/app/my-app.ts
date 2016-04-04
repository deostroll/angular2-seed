import {Component} from 'angular2/core';
import {BasicNav} from './navs/navs';
import {RouterOutlet} from 'angular2/router';

@Component({
  selector: 'my-app',
  template: `
    <h2>Stuff Todo</h2>
    <hr/>
    <basic-navs></basic-navs>
    <router-outlet></router-outlet>
  `,
  directives: [BasicNav],
  providers: [RouterOutlet]
})
export class MyApp {}
