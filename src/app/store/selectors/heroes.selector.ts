import { getHeroesState, HeroesState } from '../reducers';
import { createSelector } from '@ngrx/store';

import * as fromHeroes from '../reducers/heroes.reducer';

export const getHeroState = createSelector(
    getHeroesState,
    (state: HeroesState) => state.heroes
  );
  
  export const getHeroesLoading = createSelector(
    getHeroState,
    fromHeroes.getHeroesLoading
  );

  export const getHeroesLoaded = createSelector(
    getHeroState,
    fromHeroes.getHeroesLoaded
  );

  export const getHeroesPaylaod = createSelector(
    getHeroState,
    fromHeroes.getHeroesPaylaod
  );
