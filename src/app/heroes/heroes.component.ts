import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
// export class HeroesComponent implements OnInit {

//   selectedHero?: Hero;

//   heroes: Hero[] = [];

//   constructor(private heroService: HeroService, private messageService: MessageService) { }

//   ngOnInit(): void {
//     this.getHeroes();
//   }

//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//     this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
//   }

//   getHeroes(): void {
//     this.heroService.getHeroes()
//         .subscribe(heroes => this.heroes = heroes);
//   }
// }






// import {Component, OnInit} from '@angular/core';
// import { HeroService } from '../hero.service';
// // import {FormsModule} from '@angular/forms';

// import {Hero} from '../hero';
// // import {HEROES} from '../mock-heroes';

// @Component({
//   selector: 'app-heroes',
//   templateUrl: './heroes.component.html',
//   styleUrls: ['./heroes.component.css'],

// })

// export class HeroesComponent {
//   heroes: Hero[] = [];
//   selectedHero?: Hero;
  
//   constructor(private heroService: HeroService){}

//   getHeroes(): void {
//     this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
//   }
//   // getHeroes(): void {
//   //   this.heroes = this.heroService.getHeroes();
//   // }

//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//   }

//   ngOnInit(): void {
//     this.getHeroes();
//   }
// }