import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styles: [
  ]
})
export class CustomComponent implements OnInit {

  inMayus: boolean = false;

  // para mi pipe personalizado sort
  typeSort: string = '';

  heroes: Hero[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red
    },
    {
      name: 'Linterna Verde',
      fly: false,
      color: Color.green
    }
  ];

  
  heroes2: Hero[] = [...this.heroes];


  constructor() { }

  ngOnInit(): void {
  }

}
