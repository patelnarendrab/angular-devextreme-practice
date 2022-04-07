import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 6';
  employees = [
    { Id: 1, Firstname: 'Andy', Lastname: 'Patel', Role: 'Manager' },
    { Id: 2, Firstname: 'Ian', Lastname: 'Malvi', Role: 'Team Lead' },
    { Id: 3, Firstname: 'Narendra', Lastname: 'Patel', Role: 'Developer' },
  ];
}
