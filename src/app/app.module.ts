import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app.routing.module';
import { MdTabsModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { Product1Component } from './products/product-1/product-1.component';
import { Product2Component } from './products/product-2/product-2.component';
import { Product3Component } from './products/product-3/product-3.component';
import { Product4Component } from './products/product-4/product-4.component';
import { Product5Component } from './products/product-5/product-5.component';

import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        Product1Component,
        Product2Component,
        Product3Component,
        Product4Component,
        Product5Component,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MdTabsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
