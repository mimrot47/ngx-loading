import { Injectable } from '@angular/core';
import { NgxLoadingConfig } from './ngx-loading-config';

@Injectable({ providedIn: 'root' })
export class NgxLoadingService {
  loadingConfig = new NgxLoadingConfig();
}
