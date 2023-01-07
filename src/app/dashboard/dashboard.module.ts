import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './pages/index/index.component';
import { CardComponent } from './components/card/card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    IndexComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzCardModule
  ]
})
export class DashboardModule { }
