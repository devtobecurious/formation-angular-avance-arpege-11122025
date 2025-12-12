import { Component, inject } from '@angular/core';
import { GetAllSelfiesInfra } from '../../services/get-all-selfies.infra';
import { delay, Observable, of } from 'rxjs';
import { Selfies } from '../../models/selfie';
import { GetAllSelfiesBusiness } from '../../services/get-all-selfies.business';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { OneCardSelfie } from '../one-card-selfie/one-card-selfie';

const mock = {
  getAll(): Observable<Selfies> {
    return of([]).pipe(delay(1000));
  }
}

@Component({
  selector: 'app-list-selfies',
  imports: [AsyncPipe, OneCardSelfie, JsonPipe],
  templateUrl: './list-selfies.html',
  styleUrl: './list-selfies.css',
  providers: [{ provide: GetAllSelfiesInfra, useValue: mock }]
})
export class ListSelfies {
  private readonly getAllSelfies = inject(GetAllSelfiesBusiness);
  selfies$ = this.getAllSelfies.getAll();
}
