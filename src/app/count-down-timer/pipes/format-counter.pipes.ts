import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'formatTimer'})
export class FormatCounterPipes implements PipeTransform {
  transform(timeInSec: number): string {
    // console.log('timeInSec: ',timeInSec);
    const timeInMins = timeInSec / 60;
    let hours: number | string = Math.floor(timeInMins / 60);
    let minutes: number | string = Math.floor(timeInMins % 60);
    const minutesAsDecimal = timeInMins % 60;
    let seconds: number | string = Math.floor((minutesAsDecimal - minutes) * 60);
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${hours}  : ${minutes}  : ${seconds} `;
  }

}
