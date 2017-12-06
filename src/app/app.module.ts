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

declare var require: any;

const appRoutes: Routes = [
  { path: '', redirectTo: 'chart', pathMatch: 'full' },
  { path: 'chart', component: ChartComponent },
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
    ChartModule.forRoot(require('highcharts')),
    HttpClientModule,
    HttpModule,
  ],
  providers: [BitcoinPriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
