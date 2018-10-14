import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  heroesLength: number = 0;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getRandomInt(max): number {
    return Math.floor(Math.random() * max);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(
        (heroes) =>{
        let random = this.getRandomInt(heroes.length)
        this.heroes = heroes.slice(random, random+4)
        });
  }

}
