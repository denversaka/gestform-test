import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDivisibleModule } from './test-divisible/test-divisible.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestDivisibleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
