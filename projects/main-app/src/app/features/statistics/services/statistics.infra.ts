import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Statistics } from '../models';

@Injectable()
export class StatisticsInfrastructure {
  getAll(): Observable<Statistics> {
    return of([]).pipe(delay(1000));
  }
}
