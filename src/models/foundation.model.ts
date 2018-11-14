import { GoRouter } from '../models/gorouter.model';
import { DiegoCell } from './diego-cells.model';

export interface Foundation {
  id?: number;
  name?: string;
  gorouters?: GoRouter[];
  diegoCells?: DiegoCell[];
}

