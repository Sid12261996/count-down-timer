import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../state/root.reducer';
import * as timerAction from '../state/timer.action';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  inputTimeInMinutes: number = 0;

  outTimeSecs: number = 0;
  intervalInstance: any;


  constructor(private store: Store<State>) {
  }

  ngOnInit() {
  }

  startTimer(timeInMins: string): void {
    try {
      if (this.outTimeSecs === 0) {
        this.outTimeSecs = parseInt(timeInMins, 0) * 60;
        if (isNaN(this.outTimeSecs)) {
          this.outTimeSecs = 0;
          throw 'Please enter a valid integer for minutes';
        }
        this.inputTimeInMinutes = this.outTimeSecs;
      }
      this.clearInterval();
      this.startCountDown();

    } catch (e) {
      alert(e);
    }

  }

  startCountDown() {
    this.store.dispatch(new timerAction.StartTimer({currentCountDown: this.outTimeSecs, userInput: this.inputTimeInMinutes}));
    this.intervalInstance = setInterval(() => {
      --this.outTimeSecs;
      this.store.dispatch(new timerAction.RunTimer(this.outTimeSecs));
      if (this.outTimeSecs === -1) {
        this.resetTimer('Count down finished counting till 0');
      }
    }, 1000);
  }

  clearInterval(showAlert: boolean = false, alertText: string = 'Count down finished counting till 0') {
    clearInterval(this.intervalInstance);
    if (showAlert) {
      alert(alertText);
    }

  }

  resetTimer(alertText: string = 'Timer has been reset') {
    this.outTimeSecs = 0;
    this.inputTimeInMinutes = 0;
    this.clearInterval(true, alertText);
    this.store.dispatch(new timerAction.ResetTimer());
  }

  get progress(): number {
    if (this.inputTimeInMinutes === 0) {
      return 0;
    }
    return Math.floor(100 - (this.outTimeSecs * 100 / this.inputTimeInMinutes));
  }
}
