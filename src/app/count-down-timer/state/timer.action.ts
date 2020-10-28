import {Action} from '@ngrx/store';
import {TimerState} from './timer.reducer';

export enum TimerActionTypes {
  startTimer = '[timer] start timer',
  stopTimer = '[timer] stop timer',
  resetTimer = '[timer] reset timer',
  runTimer = '[timer] run timer',
}

export class StartTimer implements Action {
  readonly type = TimerActionTypes.startTimer;

  constructor(public timerState: TimerState) {
  }
}

export class RunTimer implements Action {
  readonly type = TimerActionTypes.runTimer;

  constructor(public currentTimerValue: number) {
  }
}


export class StopTimer implements Action {
  readonly type = TimerActionTypes.stopTimer;

  constructor(public payload: TimerState) {
  }
}

export class ResetTimer implements Action {
  readonly type = TimerActionTypes.resetTimer;

  constructor() {
  }
}


export type TimerAction = StartTimer | StopTimer | ResetTimer | RunTimer;
