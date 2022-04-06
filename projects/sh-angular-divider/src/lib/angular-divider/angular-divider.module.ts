import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDividerComponent } from './angular-divider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AngularDividerComponent],
  exports: [AngularDividerComponent]
})
export class AngularDividerModule { }
