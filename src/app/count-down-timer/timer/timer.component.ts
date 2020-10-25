import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  inputTimeInMinutes: number = 0;

  outTimeSecs: number = 0;
  intervalInstance: any;


  constructor() {
  }

  ngOnInit() {
  }

  startTimer(timeInMins: string) {

    if (this.outTimeSecs === 0) {
      this.outTimeSecs = parseInt(timeInMins, 0) * 60;
      this.inputTimeInMinutes = this.outTimeSecs;
    }
    this.clearInterval();
    this.startCountDown();
  }

  startCountDown() {
    this.intervalInstance = setInterval(() => {
      --this.outTimeSecs;
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
  }

  get progress(): number {
    if (this.inputTimeInMinutes === 0) {
      return 0;
    }
    return Math.floor(100 - (this.outTimeSecs * 100 / this.inputTimeInMinutes));
  }
}
