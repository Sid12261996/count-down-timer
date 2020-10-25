import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimerComponent} from './timer/timer.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatInputModule, MatProgressBarModule} from '@angular/material';
import {FormatCounterPipes} from './pipes/format-counter.pipes';


@NgModule({
  declarations: [TimerComponent, FormatCounterPipes],
  exports: [
    TimerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
  ]
})
export class CountDownTimerModule {
}
