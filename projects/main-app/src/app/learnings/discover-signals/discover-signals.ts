import { Component, computed, signal } from '@angular/core';
import { createEmptySelfie } from '../../features/selfies/models/selfie';

@Component({
  selector: 'app-discover-signals',
  imports: [],
  templateUrl: './discover-signals.html',
  styleUrl: './discover-signals.css',
})
export class DiscoverSignals {
  protected johny = signal('ah que johny');
  protected readonly selfie = signal(createEmptySelfie());
  //protected readonly title = computed(() => this.selfie().title + '!');

  protected readonly title = computed(() => signal(this.selfie().title + '!'));
  //protected johny = 'johnny';

  ngOnInit(): void {
    //this.johny = 'ah que johny';
    setTimeout(() => {
      //this.johny.update(old => old + ' modifié');
      // this.selfie.update(old => ({ ...old, title: 'Nouveau titre du selfie' }));
      this.selfie.update(old => {
        old.title = 'Nouveau titre du selfie';
        return { ...old };
      });
      //this.johny = 'nouveau johny';
    }, 1000);
  }
}
