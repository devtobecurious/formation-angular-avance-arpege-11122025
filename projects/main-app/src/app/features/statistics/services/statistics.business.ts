import { computed, inject, Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { StatisticsInfrastructure } from './statistics.infra';

@Injectable()
export class StatisticsBusiness {
  private readonly infra = inject(StatisticsInfrastructure);

  private readonly statsResource = rxResource({
    defaultValue: [],
    stream: (params) => this.infra.getAll(),
  })

  get first() {
    return computed(() => this.statsResource.value()[0]);
  }

  get isLoading() {
    return this.statsResource.isLoading;
  }

  get value() {
    return this.statsResource.value;
  }
}
