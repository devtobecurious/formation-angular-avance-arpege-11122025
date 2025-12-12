import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Selfie } from '../../models/selfie';

@Component({
  selector: 'app-one-card-selfie',
  imports: [],
  templateUrl: './one-card-selfie.html',
  styleUrl: './one-card-selfie.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneCardSelfie {
  selfie = input.required<Selfie>();

  getTitleMaj(selfie: Selfie): string {
    return selfie.title.toUpperCase() + '!';
  }
}
