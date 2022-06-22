import { Component } from '@angular/core';
import {
  combineLatest,
  forkJoin,
  interval,
  map,
  Observable,
  take,
  zip,
} from 'rxjs';

@Component({
  selector: 'app-join-creation-operators',
  templateUrl: './join-creation-operators.component.html',
  styleUrls: ['./join-creation-operators.component.scss'],
})
export class JoinCreationOperatorsComponent {
  private source1: Observable<string> = interval(200).pipe(
    take(10),
    map((val) => 'source1 val = ' + val)
  );
  private source2: Observable<string> = interval(300).pipe(
    take(10),
    map((val) => 'source2 val = ' + val)
  );
  private source3: Observable<string> = interval(400).pipe(
    take(10),
    map((val) => 'source3 val = ' + val)
  );
  protected firstAnswer: string = '';
  protected secondAnswer: string = '';
  protected thirdAnswer: string = '';

  protected showLatestOnEveryChanges(): void {
    combineLatest([this.source1, this.source2, this.source3]).subscribe(
      (value) => (this.firstAnswer += '\n' + value)
    );
  }

  protected showLatestAfterAllComplete(): void {
    forkJoin([this.source1, this.source2, this.source3]).subscribe(
      (value) => (this.secondAnswer += value)
    );
  }

  protected showLatestAfterAllChange(): void {
    zip(this.source1, this.source2, this.source3)
      .pipe(map(([...arr]) => [...arr]))
      .subscribe((value) => (this.thirdAnswer += '\n' + value));
  }
}
