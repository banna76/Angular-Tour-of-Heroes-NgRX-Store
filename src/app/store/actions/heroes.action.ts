import { Action } from '@ngrx/store';
import { Hero } from '../../hero';

export const LOAD_HEROS = '[Hero] Load Heros';
export const LOAD_HEROS_SUCCESS = '[Hero] Load Heros Success';
export const UPDATE_HEROS_SUCCESS = '[Hero] Update Heros Success';
export const LOAD_HEROS_FAIL = '[Hero] Load Heros Fail';

export class LoadHeros implements Action {
    readonly type = LOAD_HEROS;
  }

export class LoadHerosSuccess implements Action {
    readonly type = LOAD_HEROS_SUCCESS;
    constructor(public payload: Hero[]) {}
}

export class UpdateHerosSuccess implements Action {
    readonly type = UPDATE_HEROS_SUCCESS;
    constructor(public payload: Hero[]) {}
}

export class LoadHerosFail implements Action {
    readonly type = LOAD_HEROS_FAIL;
    constructor(public payload: any) {}
  }

export type LoadHerosActions = LoadHeros
    | LoadHerosFail
    | UpdateHerosSuccess
    | LoadHerosSuccess;