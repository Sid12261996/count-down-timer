import {TimerAction, TimerActionTypes} from './timer.action';

export interface TimerState {
  currentCountDown: number;
  userInput: number;
}

const initialState: TimerState = {currentCountDown: 0, userInput: 0};

export function reducer(state = initialState, action: TimerAction): TimerState {

  switch (action.type) {
    case TimerActionTypes.startTimer:
      return {userInput: action.timerState.userInput, currentCountDown: action.timerState.currentCountDown};
    case TimerActionTypes.runTimer:
      return {...state, currentCountDown: action.currentTimerValue};
    case TimerActionTypes.resetTimer:
      return initialState;
    default:
      return state;
  }
}
