import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Product1Component } from './products/product-1/product-1.component';
import { Product2Component } from './products/product-2/product-2.component';
import { Product3Component } from './products/product-3/product-3.component';
import { Product4Component } from './products/product-4/product-4.component';
import { Product5Component } from './products/product-5/product-5.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'product4',
        pathMatch: 'full'
    },
    { path: 'product1', component: Product1Component },
    { path: 'product2', component: Product2Component },
    { path: 'product3', component: Product3Component },
    { path: 'product4', component: Product4Component },
    { path: 'product5', component: Product5Component },
    { path: '**', redirectTo: 'product4', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
