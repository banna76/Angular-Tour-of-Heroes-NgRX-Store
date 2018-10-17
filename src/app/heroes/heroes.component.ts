import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  heroes: Hero[];
  storeHeroes: Observable<Hero[]>;


  constructor(
    private store: Store<fromStore.HeroesState>,
    private heroService: HeroService, 
    private messgaeService: MessageService ) { }
 
  ngOnInit() {
    this.store.select('heroes')
    .subscribe(
      store =>
      {if(store.loaded){
        this.heroes = [];
         this.heroes = store.herosList;
         console.log('load from Store!');
      }else{
        this.getHeroes();
        console.log('load from getRequest!');
      }
      })

  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      heroes => 
      {
        this.heroes = heroes;
        const action = new fromStore.LoadHerosSuccess(this.heroes);
        this.store.dispatch(action);
      }
      );

  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
        const action = new fromStore.UpdateHerosSuccess(this.heroes);
        this.store.dispatch(action);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}