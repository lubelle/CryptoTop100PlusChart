import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CryptoService } from 'src/services/crypto.service';
import { CryptoTableComponent } from './crypto-table/crypto-table.component';
import { BitcoinStatsComponent } from './bitcoin-stats/bitcoin-stats.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: CryptoTableComponent },
  { path: 'bitcoinStats', component: BitcoinStatsComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CryptoTableComponent,
    BitcoinStatsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
