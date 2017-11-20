import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BitcoinPriceComponent } from './bitcoin-price/bitcoin-price.component';
import { BitcoinPriceService }  from './bitcoin-price/bitcoin-price.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'bitcoin', pathMatch: 'full' },
  { path: 'bitcoin', component: BitcoinPriceComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BitcoinPriceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    HttpClientModule,
    HttpModule
  ],
  providers: [BitcoinPriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
