import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';


import { AdministrationRoutingModule } from './administration-routing.module';
import { UserManagementComponent } from './user-management/pages/user-management.component';
import { AntModule } from 'src/app/shared/utilities/ant.modules';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userFeatureKey, userReducer } from './user-management/states/users-management.reduces';
import { UsersManagementEffects } from './user-management/states/users-management.effects';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    AntModule,
    AdministrationRoutingModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzSelectModule,
    SharedModule,
    StoreModule.forFeature(userFeatureKey, userReducer),
    EffectsModule.forFeature([UsersManagementEffects])
  ]
})
export class AdministrationModule { }
