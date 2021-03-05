import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { CustomComponent } from './pages/custom/custom.component';

import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { SortPipe } from './pipes/sort.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    CustomComponent,
    MayusculasPipe,
    FlyPipe,
    SortPipe
  ],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    CustomComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
