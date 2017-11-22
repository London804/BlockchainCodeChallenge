import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ChartModule } from 'angular2-highcharts';

import { AppComponent } from './app.component';
import { BitcoinPriceComponent } from './bitcoin-price/bitcoin-price.component';
import { BitcoinPriceService }  from './bitcoin-price/bitcoin-price.service';
import { ChartComponent } from './chart/chart.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'bitcoin', pathMatch: 'full' },
  { path: 'bitcoin', component: BitcoinPriceComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BitcoinPriceComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    HttpClientModule,
    HttpModule,
    ChartModule.forRoot(require('highcharts'),
  ],
  providers: [BitcoinPriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
