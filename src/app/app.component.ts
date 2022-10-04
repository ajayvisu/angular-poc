import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-second-app';
  
  currentName = 'AjayVisu';

  names = ['Aj'];

  addName(newName: string) {
    this.names.push(newName);
  }
}
