import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { TasksComponent } from './tasks/tasks.component';
import { NftGiftsComponent } from './nft-gifts/nft-gifts.component';
import { GiftBoxesComponent } from './gift-boxes/gift-boxes.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UserInfoComponent,
    ReferralsComponent,
    TasksComponent,
    NftGiftsComponent,
    GiftBoxesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
