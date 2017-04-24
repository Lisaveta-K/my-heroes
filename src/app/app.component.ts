import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Here we go, some superheroes for humanity ;)';
  heroes = HEROES;  
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
{ id:1, name: 'Black Widow' },
{ id:2, name: 'Spiderman' },
{ id:3, name: 'Ninja Tortle' },
{ id:4, name: 'Flash' },
{ id:5, name: 'Jessica Jones' },
{ id:6, name: 'Tor' },
{ id:7, name: 'Captain Hammer' },
{ id:8, name: 'The Doctor' },
{ id:9, name: 'Cat Lady' },
{ id:10, name: 'Jenny the Mechanik' }
];