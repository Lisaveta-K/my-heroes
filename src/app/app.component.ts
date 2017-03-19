import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Here we go, some superheroes for humanity ;)';

  hero: Hero = {
	  id: 1,
	  name: 'Windstorm',
	  age: 35
	};
}

export class Hero {
  id: number;
  name: string;
  age: number;
}