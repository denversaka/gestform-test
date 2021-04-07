import { Component } from '@angular/core';
import { IRangeDivisible } from './test-divisible/models/i-range-divisible';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gest-form-test';
  range: IRangeDivisible = {begin: 0, end: 10};
}
