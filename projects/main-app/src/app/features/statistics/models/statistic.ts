import { Wookiee } from "./wookiee";

export interface Statistic {
  totalSelfies: number;
  wookie: Wookiee;
}

export type Statistics = Statistic[];

export const createEmptyStatistics = (): Statistics => ([]);
