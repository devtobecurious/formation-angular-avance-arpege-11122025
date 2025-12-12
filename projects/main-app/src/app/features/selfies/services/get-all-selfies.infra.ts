import { inject, Injectable } from '@angular/core';
import { Observable, retry, shareReplay } from 'rxjs';
import { Selfies } from '../models/selfie';
import { HttpClient } from '@angular/common/http';





@Injectable({
  providedIn: null,
  // useValue: mock
})
export class GetAllSelfiesInfra {
  private readonly httpClient = inject(HttpClient);
  private readonly obs$ = this.httpClient.get<Selfies>('/api/selfies')
    .pipe(retry(3),); // shareReplay(1));

  getAll(): Observable<Selfies> {
    return this.obs$;
  }
}
