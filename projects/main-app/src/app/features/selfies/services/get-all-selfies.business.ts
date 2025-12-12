import { inject, Injectable } from '@angular/core';
import { GetAllSelfiesInfra } from './get-all-selfies.infra';
import { delay, Observable, of } from 'rxjs';
import { Selfies } from '../models/selfie';



@Injectable()
export class GetAllSelfiesBusiness {
  private readonly infra = inject(GetAllSelfiesInfra);

  getAll() {
    return this.infra.getAll();
  }
}
