import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TimerState} from './timer.reducer';

const getTimerFeatureState = createFeatureSelector<TimerState>('timer');

export const getCurrentTime = createSelector(
  getTimerFeatureState,
  state => state.currentCountDown
);
