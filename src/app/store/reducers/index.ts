import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';


import * as fromHeroes from './heroes.reducer';

export interface HeroesState {
  heroes: fromHeroes.HeroState;
}

export const reducers: ActionReducerMap<HeroesState> = {
  heroes:  fromHeroes.heroesReducer
};

// selector for charge feature
export const getHeroesState = createFeatureSelector<HeroesState>('heroes');