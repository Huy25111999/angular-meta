import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AntModule} from './utilities/ant.modules';
import { PaginationComponent } from './components/pagination/pagination.component';

const COMPONENTS = [
  PaginationComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    AntModule
  ]
})
export class SharedModule { }
