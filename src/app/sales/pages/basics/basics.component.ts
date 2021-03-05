import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  nameLower: string = 'diego';
  nameUpper: string = 'DIEGO';
  nameFull: string = 'dIeGo goNzAlES';

  date: Date = new Date();
}
