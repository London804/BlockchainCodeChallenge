import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BitcoinPriceComponent } from './bitcoin-price/bitcoin-price.component';
import { BitcoinPriceService }  from './bitcoin-price/bitcoin-price.service';
import { LoaderService } from './loader/loader.service';
import { LoaderComponent } from './loader/loader.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'bitcoin', pathMatch: 'full' },
  { path: 'bitcoin', component: BitcoinPriceComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BitcoinPriceComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    HttpClientModule,
    HttpModule
  ],
  providers: [
    BitcoinPriceService, 
    LoaderService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
