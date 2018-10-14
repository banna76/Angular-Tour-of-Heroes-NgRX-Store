import * as fromHeros from '../actions/heroes.action';
import { Hero } from '../../hero';


export interface HeroState {
    herosList: Hero[];
    loading: boolean;
    loaded: boolean;
}

const initialState: HeroState = {
    herosList: [],
    loading: false,
    loaded: false
};

export function heroesReducer(
  state = initialState,
  action: fromHeros.LoadHerosActions
): HeroState {
  switch (action.type) {
    case fromHeros.LOAD_HEROS: {
        return { ...state, 
            loading: true,
            loaded: false
         };
      }

    case fromHeros.LOAD_HEROS_SUCCESS: {
      return {
        ...state,
        herosList: action.payload,
        loading: false,
        loaded: true
      };
    }

    case fromHeros.UPDATE_HEROS_SUCCESS: {
      return {
        ...state,
        herosList: action.payload.splice(action.payload.length-1),
        loading: false,
        loaded: true
      };
    }

    case fromHeros.LOAD_HEROS_FAIL: {
        return {
          ...state,
          herosList: action.payload,
          loading: false,
          loaded: false
        };
      }

    default: {
      return state;
    }
  }
}

export const getHeroes = (state: HeroState) => state;
export const getHeroesLoading = (state: HeroState) => state.loading;
export const getHeroesLoaded = (state: HeroState) => state.loaded;
export const getHeroesPaylaod = (state: HeroState) => state.herosList;


