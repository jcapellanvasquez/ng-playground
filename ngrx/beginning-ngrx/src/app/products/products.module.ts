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
import {CheckboxModule} from 'primeng/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductService} from './product.service';
import {ProductEffect} from './store/effects';
import {EffectsModule} from '@ngrx/effects';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [ProductFormComponent, ProductListComponent],
  exports: [
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('Products', reducer),
    EffectsModule.forFeature([ProductEffect]),
    ProductsRoutingModule,
    ButtonModule,
    PanelModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule
  ],
  providers: [ProductService]
})
export class ProductsModule {
}
