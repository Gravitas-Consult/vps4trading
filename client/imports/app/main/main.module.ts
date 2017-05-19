/**
 * Created by jasonk on 5/2/17.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
// Accounts/Auth Module
import { AccountsModule } from 'angular2-meteor-accounts-ui';
// Main
import { VPS4TradingApp } from './main.component';
import { routes } from './main.routes';
// Pages Components
import { NgbdCarouselBasic } from '../carousel-main/carousel-main.component';
import { PricedPlanBlock } from '../pages/priced-plans/priced-plans.component';
// Pages Helper Components
import { RowHRHelper } from '../pages/helpers/row-hr.component';
// Index Routes
import { PAGES_DECLARATIONS } from '../pages';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
        NgbModule.forRoot(),
        RouterModule.forRoot(routes),
        AccountsModule
    ],
    declarations: [
        VPS4TradingApp, NgbdCarouselBasic, PricedPlanBlock, RowHRHelper,
        PAGES_DECLARATIONS
    ],
    entryComponents: [ VPS4TradingApp ],
    bootstrap: [ VPS4TradingApp ]
})
export class AppModule {}