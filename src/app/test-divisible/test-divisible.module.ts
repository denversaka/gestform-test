import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasDivisibleDirective } from './directives/has-divisible.directive';
import { DivisibleByService } from './services/divisible-by.service';

@NgModule({
  declarations: [
    HasDivisibleDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HasDivisibleDirective,
  ],
  providers: [
    DivisibleByService,
  ]
})
export class TestDivisibleModule { }
