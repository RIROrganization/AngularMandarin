import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './pages/index/index.component';
import { CardComponent } from './components/card/card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ModalbodyComponent } from './components/modalbody/modalbody.component';

@NgModule({
  declarations: [
    IndexComponent,
    CardComponent,
    ModalbodyComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzCardModule,
    NzModalModule  ]
})
export class DashboardModule { }
