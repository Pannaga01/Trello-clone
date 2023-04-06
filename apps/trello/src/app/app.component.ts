import { Component,EventEmitter,Output } from '@angular/core';
import { List } from '../Task';

@Component({
  selector: 'angular-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'trello';

}
