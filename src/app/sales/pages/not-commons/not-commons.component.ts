import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent {

  // i18nSelect
  guestsName: string = 'Diego';
  genero: string = 'M';

  objMapping = {
    'M': 'invitarlo',
    'F': 'invitarla'
  }

  // i18nPlural
  clients: string[] = ['Diego', 'Neyla', 'Carlos', 'Pedro', 'Luis'];
  objPluralMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }


  // Methods
  changeGuest() {
    this.guestsName = 'Fernanda';
    this.genero = 'F';
  }

  deleteClient() {
    this.clients.pop();
  }


  // obj para usar KeyValue Pipe
  myObject = {
    name: 'Diego',
    age: 25,
    direction: 'Cajamarca, Perú'
  };

  // array para usar Json Pipe
  arrayHeroes = [
    {
      name: 'Hulk',
      power: 'Strong'
    },
    {
      name: 'Capitan America',
      power: 'Inteligence'
    }
  ];


  // Promesa para Async Pipe
  myPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res('Se resolvió la Promesa');
    }, 3000);
  });

  // Observable para Async Pipe
  myObservable = interval(2000);

}
