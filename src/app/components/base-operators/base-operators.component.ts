import { Component } from '@angular/core';

import { filter, interval, map, Observable, take } from 'rxjs';

@Component({
  selector: 'app-base-operators',
  templateUrl: './base-operators.component.html',
  styleUrls: ['./base-operators.component.scss'],
})
export class BaseOperatorsComponent {
  private numbers: Observable<number> = interval(1000).pipe(take(20));
  protected firstAnswer: string = '';
  protected secondAnswer: string = '';
  protected thirdAnswer: string = '';

  protected multiply(): void {
    this.numbers
      .pipe(map((value) => value * 3))
      .subscribe((value) => (this.firstAnswer += ' ' + value));
  }

  protected take(): void {
    this.numbers
      .pipe(take(7))
      .subscribe((value) => (this.secondAnswer += ' ' + value));
  }

  protected showEven(): void {
    this.numbers
      .pipe(filter((value) => value % 2 === 0))
      .subscribe((value) => (this.thirdAnswer += ' ' + value));
  }
}
