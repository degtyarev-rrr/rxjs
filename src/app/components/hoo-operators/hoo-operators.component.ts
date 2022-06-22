import { Component } from '@angular/core';
import {
  concatMap,
  delay,
  exhaustMap,
  filter,
  interval,
  mergeMap,
  Observable,
  of,
  repeat,
  switchMap,
  take,
} from 'rxjs';

@Component({
  selector: 'app-hoo-operators',
  templateUrl: './hoo-operators.component.html',
  styleUrls: ['./hoo-operators.component.scss'],
})
export class HooOperatorsComponent {
  private numbers: Observable<number> = interval(1000).pipe(take(20));
  protected firstAnswer: string = '';
  protected secondAnswer: string = '';
  protected thirdAnswer: string = '';
  protected fourthAnswer: string = '';

  protected repeatUntilSwitch(): void {
    this.numbers
      .pipe(switchMap((value) => of(value).pipe(delay(200), repeat(1000))))
      .subscribe((value) => (this.firstAnswer += ' ' + value));
  }

  protected showNewStream(): void {
    this.numbers
      .pipe(mergeMap(() => interval(100).pipe(take(10))))
      .subscribe((value) => (this.secondAnswer += ' ' + value));
  }

  protected repeatEven(): void {
    this.numbers
      .pipe(
        filter((value) => value % 2 === 0),
        exhaustMap((value) => of(value).pipe(delay(400), repeat(5)))
      )
      .subscribe((value) => (this.thirdAnswer += ' ' + value));
  }

  protected repeatAll(): void {
    this.numbers
      .pipe(concatMap((value) => of(value).pipe(delay(300), repeat(5))))
      .subscribe((value) => (this.fourthAnswer += ' ' + value));
  }
}
