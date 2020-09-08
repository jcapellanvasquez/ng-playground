import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductFormComponent} from './product-form/product-form.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/reducer';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';


@NgModule({
  declarations: [ProductFormComponent, ProductListComponent],
  exports: [
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('Products', reducer),
    ProductsRoutingModule,
    ButtonModule,
    PanelModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule
  ],
})
export class ProductsModule {
}
