import { Component, inject } from '@angular/core';
import { StatisticsBusiness } from '../../services/statistics.business';
import { StatisticsInfrastructure } from '../../services/statistics.infra';

@Component({
  selector: 'app-get-all-statistics',
  imports: [],
  templateUrl: './get-all-statistics.html',
  styleUrl: './get-all-statistics.css',
  providers: [StatisticsBusiness, StatisticsInfrastructure],
})
export class GetAllStatistics {
  private readonly business = inject(StatisticsBusiness);
  protected readonly value = this.business.value;
  protected readonly isLoading = this.business.isLoading;
}
