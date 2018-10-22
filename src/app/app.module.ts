import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RatesPipe } from './rates.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CartSumPipe } from './cart-sum.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RatesPipe,
    CartSumPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
